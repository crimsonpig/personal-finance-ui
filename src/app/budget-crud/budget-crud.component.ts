import { Component, OnInit } from '@angular/core';

import { BudgetItem } from './budgetitem';

@Component({
  selector: 'app-budget-crud',
  templateUrl: './budget-crud.component.html',
  styleUrls: ['./budget-crud.component.css']
})
export class BudgetCrudComponent implements OnInit {

  newIncomes: BudgetItem[] = [];
  incomes: BudgetItem[] = [];
  newExpenses: BudgetItem[] = [];
  expenses: BudgetItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
