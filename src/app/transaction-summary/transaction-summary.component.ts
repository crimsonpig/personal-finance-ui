import { Component, OnInit, ViewChild } from '@angular/core';

import { CategorizedAmount } from '../categorizedamount';
import { CategorizedAmounts } from '../categorizedamounts';
import { SearchCriteria } from '../searchcriteria';

import { TransactionSummary } from '../domain/transactionsummary';
import { TransactionSummaryService } from './transaction-summary.service';

import { SearchService } from '../search/search.service';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {

  tableColumns = ['category', 'amount'];
  incomesDataSource = new MatTableDataSource();
  expensesDataSource = new MatTableDataSource();

  @ViewChild(MatSort) incomesSort: MatSort;

  constructor(private summaryService: TransactionSummaryService,
        private searchService: SearchService) { }

  ngAfterViewInit(){
    this.incomesDataSource.sort = this.incomesSort;
  }
  
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
       this.incomesDataSource.data = theIncomes.categorizedAmounts;
       this.expensesDataSource.data = theExpenses.categorizedAmounts;
    });
  }

  ngOnInit() {
    this.searchService.searchCriteriaSubject.subscribe((newSearchCriteria) => {
        this.getSummary(newSearchCriteria);
    });
  }

}
