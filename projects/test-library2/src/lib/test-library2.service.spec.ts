import { TestBed } from '@angular/core/testing';

import { TestLibrary2Service } from './test-library2.service';

describe('TestLibrary2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestLibrary2Service = TestBed.get(TestLibrary2Service);
    expect(service).toBeTruthy();
  });
});
