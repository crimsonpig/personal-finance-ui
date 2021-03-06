import { Injectable } from '@angular/core';

import { SearchCriteria } from '../searchcriteria';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {

  searchCriteriaSubject: BehaviorSubject<SearchCriteria>;

  constructor() {
    this.searchCriteriaSubject = new BehaviorSubject<SearchCriteria>(this.instantiateSearchCriteria());
  }

  instantiateSearchCriteria(): SearchCriteria {
    const today: Date = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const monthString = this.padZero(month + 1);
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const searchCriteria = new SearchCriteria();
    searchCriteria.category = '';
    searchCriteria.startDate = year + '-' + monthString + '-01';
    searchCriteria.endDate = year + '-' + monthString + '-' + lastDayOfMonth;
    return searchCriteria;
  }

  padZero(datePart: number): string {
    return (datePart < 10) ? '0' + datePart : datePart + '';
  }

  doSearch(newSearchCriteria: SearchCriteria): void {
    this.searchCriteriaSubject.next(newSearchCriteria);
  }

}
