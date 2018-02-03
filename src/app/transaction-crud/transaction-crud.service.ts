import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';

import { SearchCriteria } from '../searchcriteria';
import { TransactionItem } from './transactionitem';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionCrudService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private transactionsUrl = 'http://localhost:8080/transactions';

  constructor(private http: Http) {}

  getTransactions(searchCriteria: SearchCriteria): Promise<TransactionItem[]> {
    let params = new HttpParams().set('endDt', searchCriteria.endDate).set('startDt', searchCriteria.startDate);
    if(searchCriteria.category){
        params = params.set('category', searchCriteria.category);
    }
    const url = `${this.transactionsUrl}?${params.toString()}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json() as TransactionItem[])
        .catch(error => { 
            console.error('An error occurred', error);
            Promise.reject(error.message || error);
        });
  }

}
