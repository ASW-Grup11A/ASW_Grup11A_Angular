import { TestBed } from '@angular/core/testing';

import { ApiKeyManagerService } from './api-key-manager.service';

describe('ApiKeyManagerService', () => {
  let service: ApiKeyManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiKeyManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
