import { Component, OnInit } from '@angular/core';

import { SearchCriteria} from '../searchcriteria';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchCriteria: SearchCriteria;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.instantiateSearchCriteria();
    this.doSearch();
  }

  instantiateSearchCriteria(): void {
    let today: Date = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let monthString = this.padZero(month+1);
    let lastDayOfMonth = new Date(year, month+1, 0).getDate();
    this.searchCriteria = new SearchCriteria();
    this.searchCriteria.category = '';
    this.searchCriteria.startDate = year + '-' + monthString + '-01';
    this.searchCriteria.endDate = year + '-' + monthString + '-' + lastDayOfMonth;
  }

  padZero(datePart: number): string {
    return (datePart < 10) ? '0' + datePart : datePart+'';
  }

  doSearch(): void {
    this.searchService.setSearchCriteria(this.searchCriteria);
  }
}
