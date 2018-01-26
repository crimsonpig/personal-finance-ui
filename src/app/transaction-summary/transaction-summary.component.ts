import { Component, OnInit } from '@angular/core';

import { CategorizedAmount } from '../categorizedamount';
import { SearchCriteria } from '../searchcriteria';

import { TransactionSummary } from '../domain/transactionsummary';
import { TransactionSummaryService } from './transaction-summary.service';

import { SearchService } from '../search/search.service';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {

  searchCriteria: SearchCriteria;

  incomes: CategorizedAmount[] = [];

  expenses: CategorizedAmount[] = [];

  constructor(private summaryService: TransactionSummaryService,
        private searchService: SearchService) { }

  getSummary(): void {
   this.summaryService.getTransactionSummary(this.searchCriteria).then(transactionSummary => {    
       this.incomes = transactionSummary.incomes;
       this.expenses = transactionSummary.expenses;
    });
  }

  ngOnInit() {
    this.searchService.searchCriteriaSubject.subscribe((newSearchCriteria) => {
        this.searchCriteria = newSearchCriteria;
        this.getSummary();
    });
  }

}
