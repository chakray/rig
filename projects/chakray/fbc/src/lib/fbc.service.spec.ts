import { TestBed } from '@angular/core/testing';

import { FbcService } from './fbc.service';

describe('FbcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbcService = TestBed.get(FbcService);
    expect(service).toBeTruthy();
  });
});
