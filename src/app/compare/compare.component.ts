import { Component, OnInit } from '@angular/core';

import { ComparisonAmount } from './comparisonamount';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  incomeComparisons: ComparisonAmount[] = [
    { category: 'PAYCHECK', expectedAmount: 5000.22, actualAmount: 2500.11, difference: 2500.11 }
  ];
  expenseComparisons: ComparisonAmount[] = [
    { category: 'GAS', expectedAmount: 150, actualAmount: 50.00, difference: 100.00 },
    { category: 'HOUSEHOLD', expectedAmount: 75, actualAmount: 45.00, difference: 25.00 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
