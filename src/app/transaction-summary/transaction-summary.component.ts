import { Component, OnInit } from '@angular/core';

import { CategorizedAmount } from '../categorizedamount';

import { TransactionSummary } from '../domain/transactionsummary';
import { TransactionSummaryService } from './transaction-summary.service';

import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {

  incomes: CategorizedAmount[] = [];

  expenses: CategorizedAmount[] = [];

  constructor(private summaryService: TransactionSummaryService,
        private searchService: SearchService) { }

  getSummary(): void {
   this.summaryService.getTransactionSummary(this.searchService.getSearchCriteria()).then(transactionSummary => {    
       console.log(transactionSummary);
       this.incomes = transactionSummary.incomes;
       this.expenses = transactionSummary.expenses;
    });
  }

  ngOnInit() {
    this.getSummary();

  }

}
