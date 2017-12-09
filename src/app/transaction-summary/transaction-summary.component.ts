import { Component, OnInit } from '@angular/core';

import { CategorizedAmount } from '../categorizedamount';

import { TransactionSummary } from '../domain/transactionsummary';
import { TransactionSummaryService } from './transaction-summary.service';


@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {

  incomes: CategorizedAmount[] = [];

  expenses: CategorizedAmount[] = [];

  constructor(private summaryService: TransactionSummaryService) { }

  getSummary(): void {
   this.summaryService.getTransactionSummary().then(transactionSummary => {    
       console.log(transactionSummary);
       this.incomes = transactionSummary.incomes;
       this.expenses = transactionSummary.expenses;
    });
  }

  ngOnInit() {
    this.getSummary();

  }

}
