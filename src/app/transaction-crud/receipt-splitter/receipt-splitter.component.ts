import { Component, Input, OnInit } from '@angular/core';

import { ReceiptItem } from './receiptitem';
import { OutputReceiptItem } from './outputreceiptitem';

import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-receipt-splitter',
  templateUrl: './receipt-splitter.component.html',
  styleUrls: ['./receipt-splitter.component.css']
})
export class ReceiptSplitterComponent implements OnInit {

  @Input() receiptDate;

  subtotal: number = 0;
  @Input() preTaxAddition: number = 0;
  @Input() taxRate: number = 7.25;
  tax: number = 0;
  taxableAmount: number = 0;
  @Input() postTaxAddition: number = 5;
  total: number = 0;

  checkSubtotal: number = 0;
  checkAdditions: number = 0;
  checkTotal: number = 0;

  newReceiptItems: ReceiptItem[] = [

    {category: 'FOOD', amount: 5.99, taxable: false},
    {category: 'FOOD', amount: 3.99, taxable: false},
    {category: 'ALCOHOL', amount: 6.99, taxable: true},
    {category: 'CLEANING SUPPLIES', amount: 23.99, taxable: true},
    {category: 'FOOD', amount: 4.11, taxable: false},
    {category: 'FOOD', amount: 3.67, taxable: false},
    {category: 'HOUSEHOLD', amount: 8.99, taxable: true},
    {category: 'CLEANING SUPPLIES', amount: 7.99, taxable: true}

  ];
  newItemsDataSource = new MatTableDataSource();
  outputItemsDataSource = new MatTableDataSource();

  inputTableColumns = ['category', 'amount', 'taxable', 'remove'];
  outputTableColumns = ['category', 'subtotal', 'additions', 'total'];

  constructor() { }

  ngOnInit() {
    this.newItemsDataSource.data = this.newReceiptItems;
  }

  addNewItem() {
    this.newReceiptItems.push(new ReceiptItem());
  }

  removeNewItem(itemToRemove: ReceiptItem) {
    const idx: number = this.newReceiptItems.indexOf(itemToRemove);
    this.newReceiptItems.splice(idx, 1);
  }

  private sumFunction = (x: number, y: number) => x + y;

  calculate() {

    const receiptItems: ReceiptItem[] = this.newReceiptItems;
    const sumFunction = (x: number, y: number) => x + y;

    this.subtotal = this.totalReceiptItems(receiptItems);
    const taxableItemsList = receiptItems.filter(item => item.taxable);
    const nonTaxableItemsList = receiptItems.filter(item => !item.taxable);
    
    const taxableSubtotal = this.totalReceiptItems(taxableItemsList);
    const nonTaxableSubtotal = this.totalReceiptItems(nonTaxableItemsList);

    const percentTaxable = taxableSubtotal / this.subtotal;
    const percentNonTaxable = nonTaxableSubtotal / this.subtotal;


    const nonTaxablePreTaxAddition = this.preTaxAddition * percentNonTaxable;
    const nonTaxablePostTaxAddition = this.postTaxAddition * percentNonTaxable;
    const nonTaxableAdditions = nonTaxablePreTaxAddition + nonTaxablePostTaxAddition;
    const nonTaxableTotal = nonTaxableSubtotal + nonTaxableAdditions;

    const taxablePreTaxAddition = this.preTaxAddition * percentTaxable;
    this.taxableAmount = taxableSubtotal + taxablePreTaxAddition;

    this.tax = taxableSubtotal * (this.taxRate / 100);
    const taxableWithTax = this.taxableAmount + this.tax;
    const taxablePostTaxAddition = this.postTaxAddition * percentTaxable;
    const taxableAdditions = taxablePreTaxAddition + this.tax + taxablePostTaxAddition;
    const taxableTotal = taxableSubtotal + taxableAdditions;

    this.total = taxableTotal + nonTaxableTotal;

    const taxableCategories = new Set(taxableItemsList.map(item => item.category));
    const nonTaxableCategories = new Set(nonTaxableItemsList.map(item => item.category));
    let taxableItems = this.groupReceiptItems(taxableItemsList, true);
    let nonTaxableItems = this.groupReceiptItems(nonTaxableItemsList, false);

    let taxableOutput = this.distributeAdditions(taxableItems, taxableSubtotal, taxableAdditions);
    let nonTaxableOutput = this.distributeAdditions(nonTaxableItems, nonTaxableSubtotal, nonTaxableAdditions);
    let output = taxableOutput.concat(nonTaxableOutput);

    this.checkSubtotal = output.map(item => new Number(item.subtotal).valueOf()).reduce(this.sumFunction, 0)
    this.checkAdditions = output.map(item => new Number(item.additions).valueOf()).reduce(this.sumFunction, 0)
    this.checkTotal = output.map(item => new Number(item.total).valueOf()).reduce(this.sumFunction, 0)

    this.outputItemsDataSource.data = output;    
  }

  private totalReceiptItems(items: ReceiptItem[]): number {
    return items.map(item => new Number(item.amount).valueOf()).reduce(this.sumFunction, 0);
  }

  private groupReceiptItems(items: ReceiptItem[], taxable: boolean): ReceiptItem[] {
    let groupedItems = new Map();
    items.forEach((item) => {
        const category = item.category;
        const totaledItem = groupedItems.get(category);
        if(!totaledItem){
            let newTotaledItem = new ReceiptItem();
            newTotaledItem.category = category;
            newTotaledItem.amount = item.amount;
            newTotaledItem.taxable = taxable;
            groupedItems.set(category, newTotaledItem);
        } else {
           totaledItem.amount = totaledItem.amount + item.amount;
           groupedItems.set(category, totaledItem);
        }
    });
    return Array.from(groupedItems.values());
  }

  private distributeAdditions(groupedItems: ReceiptItem[], groupedItemsSubtotal: number, amountToDistribute: number): OutputReceiptItem[] {
    let outputs: OutputReceiptItem[] = [];
    for(let item of groupedItems){
        let output = new OutputReceiptItem();
        output.category = item.category;
        output.subtotal = item.amount;
        output.additions = amountToDistribute * (item.amount / groupedItemsSubtotal);
        output.total = output.subtotal + output.additions;
        outputs.push(output);
    }
    return outputs;
  }

  assertCheckAdditions(){
    return this.checkAdditions == (this.preTaxAddition + this.tax + this.postTaxAddition);
  }

  saveAll() {

  }

}
