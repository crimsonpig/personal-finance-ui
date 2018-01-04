import { Injectable } from '@angular/core';

import { SearchCriteria } from '../searchcriteria';

@Injectable()
export class SearchService {

  searchCriteria: SearchCriteria;

  constructor() { }

}
