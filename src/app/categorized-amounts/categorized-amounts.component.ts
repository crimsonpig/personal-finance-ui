import { Component, OnInit, Input } from '@angular/core';

import { DecimalPipe, UpperCasePipe } from '@angular/common';

import { CategorizedAmount } from '../categorizedamount';

@Component({
  selector: 'app-categorized-amounts',
  templateUrl: './categorized-amounts.component.html',
  styleUrls: ['./categorized-amounts.component.css']
})
export class CategorizedAmountsComponent implements OnInit {

  @Input() parentCategory: string;
  @Input() categorizedAmounts: CategorizedAmount[];

  constructor() { }

  ngOnInit() {
  }

}
