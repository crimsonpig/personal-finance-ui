import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DecimalPipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { SearchService } from './search/search.service';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { TransactionSummaryService } from './transaction-summary/transaction-summary.service';
import { TransactionCrudService } from './transaction-crud/transaction-crud.service';
import { TransactionCrudComponent } from './transaction-crud/transaction-crud.component';
import { CategorizedAmountsComponent } from './categorized-amounts/categorized-amounts.component';
import { ThirdPartyComponentsModule } from './third-party-components/third-party-components.module';
import { TransactionCrudEntriesComponent } from './transaction-crud/transaction-crud-entries/transaction-crud-entries.component';
import { ReceiptSplitterComponent } from './transaction-crud/receipt-splitter/receipt-splitter.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavmenuComponent,
    TransactionSummaryComponent,
    TransactionCrudComponent,
    CategorizedAmountsComponent,
    TransactionCrudEntriesComponent,
    ReceiptSplitterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ThirdPartyComponentsModule
  ],
  providers: [
    TransactionSummaryService,
    TransactionCrudService,
    SearchService,
    DecimalPipe,
    UpperCasePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
