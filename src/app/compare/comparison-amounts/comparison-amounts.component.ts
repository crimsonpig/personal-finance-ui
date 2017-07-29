import { Component, Input, OnInit } from '@angular/core';

import { DecimalPipe, UpperCasePipe } from '@angular/common';

import { ComparisonAmount } from '../comparisonamount';

@Component({
  selector: 'app-comparison-amounts',
  templateUrl: './comparison-amounts.component.html',
  styleUrls: ['./comparison-amounts.component.css']
})
export class ComparisonAmountsComponent implements OnInit {

  @Input() parentCategory: string;
  @Input() comparisonAmounts: ComparisonAmount[];

  constructor() { }

  ngOnInit() {
  }

}
