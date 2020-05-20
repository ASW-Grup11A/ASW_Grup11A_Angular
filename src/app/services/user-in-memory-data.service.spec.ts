import {TestBed} from '@angular/core/testing';

import {UserInMemoryDataService} from './user-in-memory-data.service';

describe('UserInMemoryDataService', () => {
  let service: UserInMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
