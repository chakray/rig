import { TestBed } from '@angular/core/testing';

import { MarkedService } from './marked.service';

describe('MarkedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkedService = TestBed.get(MarkedService);
    expect(service).toBeTruthy();
  });
});
