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

  newReceiptItems: ReceiptItem[] = [];
  newItemsDataSource = new MatTableDataSource();
  outputItemsDataSource = new MatTableDataSource();

  inputTableColumns = ['category', 'amount', 'taxable', 'remove'];
  outputTableColumns = ['category', 'subtotal', 'tax', 'total'];

  constructor() { }

  ngOnInit() {
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
    this.subtotal = receiptItems.map(item => new Number(item.amount).valueOf()).reduce(sumFunction, 0);
  }

  saveAll() {

  }

}
