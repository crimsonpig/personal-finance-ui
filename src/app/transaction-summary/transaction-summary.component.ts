import { Component, OnInit } from '@angular/core';

import { CategorizedAmount } from '../categorizedamount';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {

  incomes: CategorizedAmount[] = [
    { category: 'PAYCHECK', amount: 2500.20 },
    { category: 'CREDIT CARD REWARDS', amount: 125 }
  ];

  expenses: CategorizedAmount[] = [
    { category: 'HOUSEHOLD', amount: 9.95 },
    { category: 'GAS', amount: 73.52 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
