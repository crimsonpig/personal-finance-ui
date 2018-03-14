import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptSplitterComponent } from './receipt-splitter.component';

describe('ReceiptSplitterComponent', () => {
  let component: ReceiptSplitterComponent;
  let fixture: ComponentFixture<ReceiptSplitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptSplitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
