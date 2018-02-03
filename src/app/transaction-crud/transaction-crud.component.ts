import {Component, Input, OnInit} from '@angular/core';

import {TransactionItem} from './transactionitem';
import {SearchCriteria} from '../searchcriteria';

import {TransactionCrudService} from './transaction-crud.service';

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

  constructor(private searchService: SearchService,
    private transactionCrudService: TransactionCrudService) {}

  getTransactions(searchCriteria: SearchCriteria): void {
    this.transactionCrudService.getTransactions(searchCriteria).then(transactions => {
      this.incomes = transactions.filter(transaction => transaction.tType === 'I');
      this.expenses = transactions.filter(transaction => transaction.tType === 'E');
    });
  }

  ngOnInit() {
    this.searchService.searchCriteriaSubject.subscribe((newSearchCriteria) => {
      this.getTransactions(newSearchCriteria);
    });
  }

}
