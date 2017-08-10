import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCrudEntriesComponent } from './budget-crud-entries.component';

describe('BudgetCrudEntriesComponent', () => {
  let component: BudgetCrudEntriesComponent;
  let fixture: ComponentFixture<BudgetCrudEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetCrudEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCrudEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
