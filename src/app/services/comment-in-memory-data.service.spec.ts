import {TestBed} from '@angular/core/testing';

import {CommentInMemoryDataService} from './comment-in-memory-data.service';

describe('CommentInMemoryDataService', () => {
  let service: CommentInMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentInMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
