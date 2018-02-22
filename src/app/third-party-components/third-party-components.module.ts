import { NgModule } from '@angular/core';
import { MatTableModule, MatSortModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    NoopAnimationsModule, 
    MatTableModule,
    MatSortModule
  ],
  exports: [
    MatTableModule,
    MatSortModule
  ],
  declarations: []
})
export class ThirdPartyComponentsModule { }
