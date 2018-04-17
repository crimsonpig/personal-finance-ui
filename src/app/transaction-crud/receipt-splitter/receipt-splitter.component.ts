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
  @Input() preTaxAddition: number;
  @Input() taxRate: number;
  tax: number = 0;
  @Input() postTaxAddition: number;
  total: number = 0;

  checkSubtotal: number = 0;
  checkTax: number = 0;
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
  outputTableColumns = ['category', 'subtotal', 'tax', 'total'];

  constructor() { }

  ngOnInit() {
    this.newItemsDataSource.data = this.newReceiptItems;
  }

  addNewItem() {
    this.newReceiptItems.push(new ReceiptItem());
    this.newItemsDataSource.data = this.newReceiptItems;
  }

  removeNewItem(itemToRemove: ReceiptItem) {
    const idx: number = this.newReceiptItems.indexOf(itemToRemove);
    this.newReceiptItems.splice(idx, 1);
    this.newItemsDataSource.data = this.newReceiptItems;
  }

  calculate() {
    let nonTaxableItems = new Map();
    let taxableItems = new Map();
    const receiptItems: ReceiptItem[] = this.newReceiptItems;
    const sumFunction = (x: number, y: number) => x + y;

    this.subtotal = this.totalReceiptItems(receiptItems);
    const taxableItemsList = receiptItems.filter(item => item.taxable);
    const nonTaxableItemsList = receiptItems.filter(item => !item.taxable);
    
    const taxableSubtotal = this.totalReceiptItems(taxableItemsList);
    const nonTaxableSubtotal = this.totalReceiptItems(nonTaxableItemsList);

    const percentTaxable = taxableSubtotal / this.subtotal;
    const percentNonTaxable = nonTaxableSubtotal / this.subtotal;

  }

  private sumFunction = (x: number, y: number) => x + y;

  private totalReceiptItems(items: ReceiptItem[]): number {
    return items.map(item => new Number(item.amount).valueOf()).reduce(this.sumFunction, 0);
  }

  saveAll() {

  }

}
