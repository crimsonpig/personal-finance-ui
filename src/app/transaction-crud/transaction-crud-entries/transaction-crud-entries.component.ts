import {Component, Input, ViewChild } from '@angular/core';

import {TransactionItem} from '../transactionitem';

import {TransactionCrudService} from '../transaction-crud.service';

import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-transaction-crud-entries',
  templateUrl: './transaction-crud-entries.component.html',
  styleUrls: ['./transaction-crud-entries.component.css']
})
export class TransactionCrudEntriesComponent {

  @Input() tType: string;
  @Input() parentCategory: string;
  newTransactionItems: TransactionItem[] = [];
  transactionItems: TransactionItem[];

  tableColumns = ['tDate', 'category', 'amount', 'remove'];

  dataSource = new MatTableDataSource();
  newItemsDataSource = new MatTableDataSource();

  private sumFunction = (x: number, y: number) => x + y;
  
  @ViewChild(MatSort) sort: MatSort;

  constructor(private transactionCrudService: TransactionCrudService) {}

  ngAfterViewInit(){
    this.dataSource!.sort = this.sort;
  }

  refreshTransactionItems(){
    this.dataSource.data = this.transactionItems;
  }

  addNewItem() {
    this.newTransactionItems.push(new TransactionItem());
    this.newItemsDataSource.data = this.newTransactionItems;
  }

  setTransactionItems(tItems: TransactionItem[]) {
    this.transactionItems = tItems;
    this.refreshTransactionItems();
  }

  saveNewItem(itemToSave: TransactionItem) {
    itemToSave.tType = this.tType;
    this.transactionCrudService.saveNewTransaction(itemToSave).then(persistedTransaction => {
      this.transactionItems.push(persistedTransaction);
      this.refreshTransactionItems();
      this.removeNewItem(itemToSave);
    });
  }

  removeNewItem(itemToRemove: TransactionItem) {
    const idx: number = this.newTransactionItems.indexOf(itemToRemove);
    this.newTransactionItems.splice(idx, 1);
    this.refreshTransactionItems();
  }

  removeExistingItem(itemToRemove: TransactionItem) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.transactionCrudService.deleteTransaction(itemToRemove).then(deletedTransaction => {
        const idx: number = this.transactionItems.indexOf(itemToRemove);
        this.transactionItems.splice(idx, 1);
        this.refreshTransactionItems();
      });
    }
  }

  parentCategoryTotal(): number {
    return this.transactionItems.map(item => item.amount).reduce(this.sumFunction, 0);
  }

}
