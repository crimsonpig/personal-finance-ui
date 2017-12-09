import { TestBed, inject } from '@angular/core/testing';

import { TransactionSummaryService } from './transaction-summary.service';

describe('TransactionSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionSummaryService]
    });
  });

  it('should be created', inject([TransactionSummaryService], (service: TransactionSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
