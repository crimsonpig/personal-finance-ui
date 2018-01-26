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

  getTotal() {
    return this.categorizedAmounts
        .map(categorizedAmount => categorizedAmount.amount)
        .reduce((sum, current) => sum + current, 0)
        .toFixed(2);
  }

  ascendingOrder: boolean = true;
  lastSortField: string = '';

  sortItems(sortField: string){
    if(sortField != this.lastSortField){
        this.ascendingOrder = true;
    }

    this.categorizedAmounts.sort((a: CategorizedAmount, b: CategorizedAmount) => {
        if(a[sortField] < b[sortField]){
            return -1;
        } else if (a[sortField] > b[sortField]){
            return 1;
        } else {
            return 0;
        }
    });
    if(!this.ascendingOrder){
        this.categorizedAmounts.reverse();
    }
    this.ascendingOrder = !this.ascendingOrder;
    this.lastSortField = sortField;
  }


}
