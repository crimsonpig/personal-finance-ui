import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizedAmountsComponent } from './categorized-amounts.component';

describe('CategorizedAmountsComponent', () => {
  let component: CategorizedAmountsComponent;
  let fixture: ComponentFixture<CategorizedAmountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorizedAmountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorizedAmountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
