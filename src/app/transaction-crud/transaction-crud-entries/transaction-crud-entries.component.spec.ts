import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCrudEntriesComponent } from './transaction-crud-entries.component';

describe('TransactionCrudEntriesComponent', () => {
  let component: TransactionCrudEntriesComponent;
  let fixture: ComponentFixture<TransactionCrudEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionCrudEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCrudEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
