import { Component, OnInit } from '@angular/core';

import { CategorizedAmount } from '../categorizedamount';

@Component({
  selector: 'app-budget-summary',
  templateUrl: './budget-summary.component.html',
  styleUrls: ['./budget-summary.component.css']
})
export class BudgetSummaryComponent implements OnInit {

  incomes: CategorizedAmount[] = [
    { category: 'PAYCHECK', amount: 5000.22 },
    { category: 'CREDIT CARD REWARDS', amount: 125 }
  ];

  expenses: CategorizedAmount[] = [
    { category: 'HOUSEHOLD', amount: 75 },
    { category: 'GAS', amount: 150 },
    { category: 'GROCERIES', amount: 400 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
