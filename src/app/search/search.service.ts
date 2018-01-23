import { Injectable } from '@angular/core';

import { SearchCriteria } from '../searchcriteria';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService {

  searchCriteria: Subject<SearchCriteria>;

  constructor() { 

    console.log('constructing search service');
    this.searchCriteria = new Subject<SearchCriteria>();
    this.searchCriteria.next(this.instantiateSearchCriteria());
  }

  instantiateSearchCriteria(): SearchCriteria {
    let today: Date = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let monthString = this.padZero(month+1);
    let lastDayOfMonth = new Date(year, month+1, 0).getDate();
    let searchCriteria = new SearchCriteria();
    searchCriteria.category = '';
    searchCriteria.startDate = year + '-' + monthString + '-01';
    searchCriteria.endDate = year + '-' + monthString + '-' + lastDayOfMonth;
    return searchCriteria;
  }

  padZero(datePart: number): string {
    return (datePart < 10) ? '0' + datePart : datePart+'';
  }

  doSearch(newSearchCriteria: SearchCriteria): void {
    console.log('Old Search Criteria ');
    console.log(this.searchCriteria);

    this.searchCriteria.next(newSearchCriteria);
    console.log('New Search Criteria');
    console.log(newSearchCriteria);
  }

}
