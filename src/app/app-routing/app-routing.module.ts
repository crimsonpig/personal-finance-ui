import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionSummaryComponent } from '../transaction-summary/transaction-summary.component';
import { TransactionCrudComponent } from '../transaction-crud/transaction-crud.component';
import { BudgetSummaryComponent } from '../budget-summary/budget-summary.component';
import { BudgetCrudComponent } from '../budget-crud/budget-crud.component';
import { CompareComponent } from '../compare/compare.component';

const routes: Routes = [
    { path: '', redirectTo: '/summary', pathMatch: 'full' },
    { path: 'summary', component: TransactionSummaryComponent },
    { path: 'transactions', component: TransactionCrudComponent },
    { path: 'budgetsummary', component: BudgetSummaryComponent },
    { path: 'budget', component: BudgetCrudComponent },
    { path: 'compare', component: CompareComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
