import { TestBed } from '@angular/core/testing';

import { InMemoryInteractionLogService } from './in-memory-interaction-log.service';

describe('InMemoryInteractionLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryInteractionLogService = TestBed.get(InMemoryInteractionLogService);
    expect(service).toBeTruthy();
  });
});
