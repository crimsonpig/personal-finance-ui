import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonAmountsComponent } from './comparison-amounts.component';

describe('ComparisonAmountsComponent', () => {
  let component: ComparisonAmountsComponent;
  let fixture: ComponentFixture<ComparisonAmountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonAmountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonAmountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
