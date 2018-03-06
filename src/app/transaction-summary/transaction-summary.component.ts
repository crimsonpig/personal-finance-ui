import { Component, OnInit, ViewChild } from '@angular/core';

import { CategorizedAmounts } from '../categorizedamounts';
import { SearchCriteria } from '../searchcriteria';

import { TransactionSummary } from '../domain/transactionsummary';
import { TransactionSummaryService } from './transaction-summary.service';

import { SearchService } from '../search/search.service';

import { CategorizedAmountsComponent } from '../categorized-amounts/categorized-amounts.component';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {
  
  netTotal: number = 0;

  @ViewChild("incomeSummary") incomesComponent: CategorizedAmountsComponent;
  @ViewChild("expensesSummary") expensesComponent: CategorizedAmountsComponent;

  constructor(private summaryService: TransactionSummaryService,
        private searchService: SearchService) { }

  getSummary(searchCriteria: SearchCriteria): void {
   this.summaryService.getTransactionSummary(searchCriteria).then(transactionSummary => {
       const theIncomes = new CategorizedAmounts();
       theIncomes.categorizedAmounts = transactionSummary.incomes;
       theIncomes.total = transactionSummary.incomesTotal;
       theIncomes.parentCategory = 'Incomes';
       const theExpenses = new CategorizedAmounts();
       theExpenses.categorizedAmounts = transactionSummary.expenses;
       theExpenses.total = transactionSummary.expensesTotal;
       theExpenses.parentCategory = 'Expenses';

       this.incomesComponent.setCategorizedAmountData(theIncomes);
       this.expensesComponent.setCategorizedAmountData(theExpenses);
       this.netTotal = theIncomes.total - theExpenses.total;
    });
  }

  ngOnInit() {
    this.searchService.searchCriteriaSubject.subscribe((newSearchCriteria) => {
        this.getSummary(newSearchCriteria);
    });
  }

}
