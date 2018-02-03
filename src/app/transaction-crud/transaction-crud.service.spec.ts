import { TestBed, inject } from '@angular/core/testing';

import { TransactionCrudService } from './transaction-crud.service';

describe('TransactionCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionCrudService]
    });
  });

  it('should be created', inject([TransactionCrudService], (service: TransactionCrudService) => {
    expect(service).toBeTruthy();
  }));
});
