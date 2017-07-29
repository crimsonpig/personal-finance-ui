import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { BudgetSummaryComponent } from './budget-summary/budget-summary.component';
import { CompareComponent } from './compare/compare.component';
import { TransactionCrudComponent } from './transaction-crud/transaction-crud.component';
import { BudgetCrudComponent } from './budget-crud/budget-crud.component';
import { CategorizedAmountsComponent } from './categorized-amounts/categorized-amounts.component';
import { ComparisonAmountsComponent } from './compare/comparison-amounts/comparison-amounts.component';
import { TransactionCrudEntriesComponent } from './transaction-crud/transaction-crud-entries/transaction-crud-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavmenuComponent,
    TransactionSummaryComponent,
    BudgetSummaryComponent,
    CompareComponent,
    TransactionCrudComponent,
    BudgetCrudComponent,
    CategorizedAmountsComponent,
    ComparisonAmountsComponent,
    TransactionCrudEntriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
