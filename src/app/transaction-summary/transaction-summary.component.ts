import { Component, OnInit } from '@angular/core';

import { CategorizedAmount } from '../categorizedamount';
import { CategorizedAmounts } from '../categorizedamounts';
import { SearchCriteria } from '../searchcriteria';

import { TransactionSummary } from '../domain/transactionsummary';
import { TransactionSummaryService } from './transaction-summary.service';

import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {

  incomes: CategorizedAmounts;

  expenses: CategorizedAmounts;

  constructor(private summaryService: TransactionSummaryService,
        private searchService: SearchService) { }

  getSummary(searchCriteria: SearchCriteria): void {
   this.summaryService.getTransactionSummary(searchCriteria).then(transactionSummary => {
       let theIncomes = new CategorizedAmounts();
       theIncomes.categorizedAmounts = transactionSummary.incomes;
       theIncomes.total = transactionSummary.incomesTotal;
       theIncomes.parentCategory = "Incomes";
       let theExpenses = new CategorizedAmounts();
       theExpenses.categorizedAmounts = transactionSummary.expenses;
       theExpenses.total = transactionSummary.expensesTotal; 
       theExpenses.parentCategory = "Expenses";
       this.incomes = theIncomes;
       this.expenses = theExpenses;
    });
  }

  ngOnInit() {
    this.searchService.searchCriteriaSubject.subscribe((newSearchCriteria) => {
        this.getSummary(newSearchCriteria);
    });
  }

}
