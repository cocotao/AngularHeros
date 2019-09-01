import { TestBed } from '@angular/core/testing';

import { InteractionLogService } from './interaction-log.service';

describe('InteractionLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InteractionLogService = TestBed.get(InteractionLogService);
    expect(service).toBeTruthy();
  });
});
