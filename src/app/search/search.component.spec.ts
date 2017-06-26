import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', async() => {
    expect(component).toBeTruthy();
  });

  it('should contain search criteria with start date and end date resulting in the current month', async() => {
    const criteria = component.searchCriteria;
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const lastDayOfMonth = new Date(year, month+1, 0).getDate();

    expect(criteria.category).toEqual('');
    expect(criteria.startDate.getDate()).toEqual(1);
    expect(criteria.startDate.getMonth()).toEqual(month);
    expect(criteria.startDate.getFullYear()).toEqual(year);

    expect(criteria.endDate.getDate()).toEqual(lastDayOfMonth);
    expect(criteria.endDate.getMonth()).toEqual(month);
    expect(criteria.endDate.getFullYear()).toEqual(year);
  });
});
