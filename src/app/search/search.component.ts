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
    this.searchCriteria = this.searchService.searchCriteriaSubject.value;
  }

  doSearch() {
    this.searchService.doSearch(this.searchCriteria);
  }

}
