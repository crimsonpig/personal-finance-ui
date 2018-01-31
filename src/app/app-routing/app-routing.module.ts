import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionSummaryComponent } from '../transaction-summary/transaction-summary.component';
import { TransactionCrudComponent } from '../transaction-crud/transaction-crud.component';

const routes: Routes = [
    { path: '', redirectTo: '/summary', pathMatch: 'full' },
    { path: 'summary', component: TransactionSummaryComponent },
    { path: 'transactions', component: TransactionCrudComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
