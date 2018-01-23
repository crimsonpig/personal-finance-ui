import { Injectable } from '@angular/core';

import { SearchCriteria } from '../searchcriteria';

@Injectable()
export class SearchService {

  searchCriteria: SearchCriteria;

  constructor() { }

  doSearch(newSearchCriteria: SearchCriteria): void {
    console.log('Old Search Criteria ');
    console.log(this.searchCriteria);
    this.searchCriteria = newSearchCriteria;
    console.log('New Search Criteria');
    console.log(newSearchCriteria);
  }

}
