import { Component, Input, OnInit } from '@angular/core';

import { TransactionItem } from '../transactionitem';

@Component({
  selector: 'app-transaction-crud-entries',
  templateUrl: './transaction-crud-entries.component.html',
  styleUrls: ['./transaction-crud-entries.component.css']
})
export class TransactionCrudEntriesComponent implements OnInit {

  @Input() parentCategory: string;
  @Input() newTransactionItems: TransactionItem[];
  @Input() transactionItems: TransactionItem[];

  constructor() { }

  ngOnInit() {
  }

  addNewItem(){
    this.newTransactionItems.push(new TransactionItem());
  }

  saveNewItem(itemToSave: TransactionItem){
    //Call backend web-service IRL
    this.transactionItems.push(itemToSave);
    this.removeNewItem(itemToSave);
  }

  removeNewItem(itemToRemove: TransactionItem){
    const idx: number = this.newTransactionItems.indexOf(itemToRemove);
    this.newTransactionItems.splice(idx, 1);
  }

}
