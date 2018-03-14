import { Component, Input, OnInit } from '@angular/core';

import { ReceiptItem } from './receiptitem';

import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-receipt-splitter',
  templateUrl: './receipt-splitter.component.html',
  styleUrls: ['./receipt-splitter.component.css']
})
export class ReceiptSplitterComponent implements OnInit {

  @Input() receiptDate;

  newReceiptItems: ReceiptItem[] = [];
  newItemsDataSource = new MatTableDataSource();

  inputTableColumns = ['category', 'amount', 'taxable', 'remove'];

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

}
