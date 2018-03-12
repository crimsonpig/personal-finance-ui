import { NgModule } from '@angular/core';
import { MatTableModule, MatSortModule, MatButtonModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    NoopAnimationsModule, 
    MatTableModule,
    MatSortModule,
    MatButtonModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatButtonModule
  ],
  declarations: []
})
export class ThirdPartyComponentsModule { }
