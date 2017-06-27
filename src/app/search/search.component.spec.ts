import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ], 
      imports: [ FormsModule ]
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

  it('should have search criteria with start date of the first day of the month and end date of the last day of the month', async() => {
    const criteria = component.searchCriteria;
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let lastDayOfMonth = new Date(year, month+1, 0).getDate();
    let actualMonth = month+1;
    let monthString = actualMonth < 10 ? '0'+actualMonth : ''+actualMonth; 
    let expectedStartDate = year + '-' + monthString + '-01';
    let expectedEndDate = year + '-' + monthString + '-' + lastDayOfMonth;


    expect(criteria.category).toEqual('');
    expect(criteria.startDate).toEqual(expectedStartDate);
    expect(criteria.endDate).toEqual(expectedEndDate);

  });

});
