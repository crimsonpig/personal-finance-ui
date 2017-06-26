import { Component, OnInit } from '@angular/core';

import { SearchCriteria} from '../searchcriteria';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchCriteria: SearchCriteria;

  constructor() { }

  ngOnInit() {
    this.instantiateSearchCriteria();
  }

  instantiateSearchCriteria(): void {
    let today: Date = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    this.searchCriteria = new SearchCriteria();
    this.searchCriteria.category = '';
    this.searchCriteria.startDate = new Date(year, month, 1);
    this.searchCriteria.endDate = new Date(year, month+1, 0);

  }

}
