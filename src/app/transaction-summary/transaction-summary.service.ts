import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { TransactionSummary } from '../domain/transactionsummary';
import { SearchCriteria } from '../searchcriteria';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionSummaryService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private transactionSummaryUrl = 'http://localhost:8080/reports/transactions';

  constructor(private http: Http) {}

  getTransactionSummary(searchCriteria: SearchCriteria): Promise<TransactionSummary> {
    const url = `${this.transactionSummaryUrl}?endDt=${searchCriteria.endDate}&startDt=${searchCriteria.startDate}`;
    return this.http.get(url)
        .toPromise()
        .then(response => 
            response.json() as TransactionSummary
        )
        .catch(error => {
            console.error('An error occurred', error);            
            Promise.reject(error.message || error);

        });
  }

}
