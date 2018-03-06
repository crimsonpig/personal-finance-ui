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

  @Input() categorizedAmounts: CategorizedAmounts = new CategorizedAmounts();

  tableColumns = ['category', 'amount'];
  
  dataSource = new MatTableDataSource();
  
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit(){
    this.dataSource!.sort = this.sort;
  }

  reload(){
    this.dataSource.data = this.categorizedAmounts.categorizedAmounts;
  }

}
