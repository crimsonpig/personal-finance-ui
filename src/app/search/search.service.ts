import { Injectable } from '@angular/core';

import { SearchCriteria } from '../searchcriteria';

@Injectable()
export class SearchService {

  searchCriteria: SearchCriteria;

  constructor() { }

  setSearchCriteria(newSearchCriteria: SearchCriteria){
    this.searchCriteria = newSearchCriteria;
  }

  getSearchCriteria(): SearchCriteria {
    return this.searchCriteria;
  }

}
