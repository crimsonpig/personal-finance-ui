import { Component, Input, OnInit } from '@angular/core';

import { TransactionItem } from './transactionitem';

@Component({
  selector: 'app-transaction-crud',
  templateUrl: './transaction-crud.component.html',
  styleUrls: ['./transaction-crud.component.css']
})
export class TransactionCrudComponent implements OnInit {

  newIncomes: TransactionItem[] = [
    { tDate: '2017-07-30', category: 'PAYCHECK', amount: 2500.11 },
  ];

  incomes: TransactionItem[] = [
    { tDate: '2017-07-15', category: 'PAYCHECK', amount: 2500.11 },
    { tDate: '2017-07-02', category: 'CREDIT CARD REWARDS', amount: 125 }
  ];

  newExpenses: TransactionItem[] = [
    { tDate: '2017-07-30', category: 'gas', amount: 22.77 },
  ];

  expenses: TransactionItem[] = [
    { tDate: '2017-07-22', category: 'FOOD', amount: 81.80 },
    { tDate: '2017-07-20', category: 'GAS', amount: 21.20 },
    { tDate: '2017-07-02', category: 'Household', amount: 15.87 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
