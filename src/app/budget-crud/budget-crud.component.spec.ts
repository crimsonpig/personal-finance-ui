import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCrudComponent } from './budget-crud.component';

describe('BudgetCrudComponent', () => {
  let component: BudgetCrudComponent;
  let fixture: ComponentFixture<BudgetCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
