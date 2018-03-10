import {Component, Input, ViewChild, OnInit} from '@angular/core';

import {TransactionItem} from '../transactionitem';

import {TransactionCrudService} from '../transaction-crud.service';

import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-transaction-crud-entries',
  templateUrl: './transaction-crud-entries.component.html',
  styleUrls: ['./transaction-crud-entries.component.css']
})
export class TransactionCrudEntriesComponent implements OnInit {

  @Input() tType: string;
  @Input() parentCategory: string;
  newTransactionItems: TransactionItem[] = [];
  transactionItems: TransactionItem[];

  tableColumns = ['tDate', 'category', 'amount', 'remove'];
  dataSource = new MatTableDataSource();
  
  @ViewChild(MatSort) sort: MatSort;

  ascendingOrder = true;
  lastSortField = '';

  constructor(private transactionCrudService: TransactionCrudService) {}

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.dataSource!.sort = this.sort;
  }

  addNewItem() {
    this.newTransactionItems.push(new TransactionItem());
  }

  setTransactionItems(tItems: TransactionItem[]) {
    this.transactionItems = tItems;
    this.dataSource.data = this.transactionItems;
  }

  saveNewItem(itemToSave: TransactionItem) {
    itemToSave.tType = this.tType;
    this.transactionCrudService.saveNewTransaction(itemToSave).then(persistedTransaction => {
      this.transactionItems.push(persistedTransaction);
      this.dataSource.data = this.transactionItems;
      this.removeNewItem(itemToSave);
    });
  }

  removeNewItem(itemToRemove: TransactionItem) {
    const idx: number = this.newTransactionItems.indexOf(itemToRemove);
    this.newTransactionItems.splice(idx, 1);
  }

  removeExistingItem(itemToRemove: TransactionItem) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.transactionCrudService.deleteTransaction(itemToRemove).then(deletedTransaction => {
        const idx: number = this.transactionItems.indexOf(itemToRemove);
        this.transactionItems.splice(idx, 1);
        this.dataSource.data = this.transactionItems;
      });
    }
  }

}
