import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';

import { DecimalPipe, UpperCasePipe } from '@angular/common';

import { CategorizedAmount } from '../categorizedamount';
import { CategorizedAmounts } from '../categorizedamounts';

@Component({
  selector: 'app-categorized-amounts',
  templateUrl: './categorized-amounts.component.html',
  styleUrls: ['./categorized-amounts.component.css']
})
export class CategorizedAmountsComponent implements OnInit {

   @Input() categorizedAmounts: CategorizedAmounts;

  tableColumns = ['category', 'amount'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  ascendingOrder = true;
  lastSortField = '';

  constructor() { }

  ngOnInit() {
  }

  sortItems(sortField: string) {
    if (sortField !== this.lastSortField) {
        this.ascendingOrder = true;
    }

    this.categorizedAmounts.categorizedAmounts.sort((a: CategorizedAmount, b: CategorizedAmount) => {
        if (a[sortField] < b[sortField]) {
            return -1;
        } else if (a[sortField] > b[sortField]) {
            return 1;
        } else {
            return 0;
        }
    });
    if (!this.ascendingOrder) {
        this.categorizedAmounts.categorizedAmounts.reverse();
    }
    this.ascendingOrder = !this.ascendingOrder;
    this.lastSortField = sortField;
  }


}
