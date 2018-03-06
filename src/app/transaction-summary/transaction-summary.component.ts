import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { CategorizedAmount } from '../categorizedamount';
import { CategorizedAmounts } from '../categorizedamounts';
import { SearchCriteria } from '../searchcriteria';

import { TransactionSummary } from '../domain/transactionsummary';
import { TransactionSummaryService } from './transaction-summary.service';

import { SearchService } from '../search/search.service';
import { MatSort, MatTableDataSource } from '@angular/material';

import { CategorizedAmountsComponent } from '../categorized-amounts/categorized-amounts.component';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {

  tableColumns = ['category', 'amount'];
  
  netTotal: number = 0;

  expenses: CategorizedAmounts = new CategorizedAmounts();
  
  expensesDataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild("incomeSummary") incomesComponent: CategorizedAmountsComponent;

  @ViewChild("expensesSort") expensesSort: MatSort;
  
  constructor(private summaryService: TransactionSummaryService,
        private searchService: SearchService) { }

  ngAfterViewInit(){
    this.expensesDataSource!.sort = this.expensesSort;
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

       this.expenses = theExpenses;
       this.expensesDataSource.data = theExpenses.categorizedAmounts;
       this.incomesComponent.setCategorizedAmountData(theIncomes);
       this.netTotal = theIncomes.total - theExpenses.total;
    });
  }

  ngOnInit() {
    this.searchService.searchCriteriaSubject.subscribe((newSearchCriteria) => {
        this.getSummary(newSearchCriteria);
    });
  }

}
