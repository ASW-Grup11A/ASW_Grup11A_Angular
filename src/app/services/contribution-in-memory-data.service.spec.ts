import {TestBed} from '@angular/core/testing';

import {ContributionInMemoryDataService} from './contribution-in-memory-data.service';

describe('InMemoryDataServiceService', () => {
  let service: ContributionInMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContributionInMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
