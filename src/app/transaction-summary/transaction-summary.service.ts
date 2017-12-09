import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { TransactionSummary } from '../domain/transactionsummary';
import { SearchCriteria } from '../searchcriteria';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionSummaryService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private transactionSummaryUrl = 'http://localhost:8080/reports/transactions?endDt=2017-12-31&startDt=2017-12-01';

  constructor(private http: Http) {}

  getTransactionSummary(): Promise<TransactionSummary> {
    return this.http.get(this.transactionSummaryUrl)
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
