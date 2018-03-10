import {Component, Input, ViewChild, OnInit} from '@angular/core';

import {TransactionItem} from './transactionitem';
import {SearchCriteria} from '../searchcriteria';

import {TransactionCrudService} from './transaction-crud.service';

import {TransactionCrudEntriesComponent} from './transaction-crud-entries/transaction-crud-entries.component';

import {SearchService} from '../search/search.service';

@Component({
  selector: 'app-transaction-crud',
  templateUrl: './transaction-crud.component.html',
  styleUrls: ['./transaction-crud.component.css']
})
export class TransactionCrudComponent implements OnInit {

  newIncomes: TransactionItem[] = [];
  incomes: TransactionItem[];

  newExpenses: TransactionItem[] = [];

  expenses: TransactionItem[];

  @ViewChild("incomeEntries") incomeEntriesComponent: TransactionCrudEntriesComponent;
  @ViewChild("expenseEntries") expenseEntriesComponent: TransactionCrudEntriesComponent;

  constructor(private searchService: SearchService,
    private transactionCrudService: TransactionCrudService) {}

  getTransactions(searchCriteria: SearchCriteria): void {
    this.transactionCrudService.getTransactions(searchCriteria).then(transactions => {
      this.incomes = transactions.filter(transaction => transaction.tType === 'I');
      this.incomeEntriesComponent.setTransactionItems(this.incomes);
      this.expenses = transactions.filter(transaction => transaction.tType === 'E');
      this.expenseEntriesComponent.setTransactionItems(this.expenses);
    });
  }

  ngOnInit() {
    this.searchService.searchCriteriaSubject.subscribe((newSearchCriteria) => {
      this.getTransactions(newSearchCriteria);
    });
  }

}
