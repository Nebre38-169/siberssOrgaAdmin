import { TestBed } from '@angular/core/testing';

import { RotanceService } from './rotance.service';

describe('RotanceService', () => {
  let service: RotanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
