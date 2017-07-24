import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionSummaryComponent } from '../transaction-summary/transaction-summary.component';
import { BudgetSummaryComponent } from '../budget-summary/budget-summary.component';
import { CompareComponent } from '../compare/compare.component';

const routes: Routes = [
    { path: '', redirectTo: '/summary', pathMatch: 'full' },
    { path: 'summary', component: TransactionSummaryComponent },
    { path: 'budgetsummary', component: BudgetSummaryComponent },
    { path: 'compare', component: CompareComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
