import { Component, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';

import { DecimalPipe, UpperCasePipe } from '@angular/common';

import { CategorizedAmount } from '../categorizedamount';
import { CategorizedAmounts } from '../categorizedamounts';

@Component({
  selector: 'app-categorized-amounts',
  templateUrl: './categorized-amounts.component.html',
  styleUrls: ['./categorized-amounts.component.css']
})
export class CategorizedAmountsComponent {

  categorizedAmounts: CategorizedAmounts = new CategorizedAmounts();

  tableColumns = ['category', 'amount'];
  
  dataSource = new MatTableDataSource();
  
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit(){
    this.dataSource!.sort = this.sort;
  }

  setCategorizedAmountData(newCategorizedAmounts: CategorizedAmounts){
    this.categorizedAmounts = newCategorizedAmounts;
    this.dataSource.data = this.categorizedAmounts.categorizedAmounts;
  }

}
