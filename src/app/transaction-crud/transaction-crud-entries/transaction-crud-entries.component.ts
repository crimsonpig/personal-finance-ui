import { Component, Input, OnInit } from '@angular/core';

import { TransactionItem } from '../transactionitem';

@Component({
  selector: 'app-transaction-crud-entries',
  templateUrl: './transaction-crud-entries.component.html',
  styleUrls: ['./transaction-crud-entries.component.css']
})
export class TransactionCrudEntriesComponent implements OnInit {

  @Input() parentCategory: string;
  @Input() newTransactionItems: TransactionItem[];
  @Input() transactionItems: TransactionItem[];

  constructor() { }

  ngOnInit() {
  }

}
