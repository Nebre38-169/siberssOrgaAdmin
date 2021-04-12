import { TestBed } from '@angular/core/testing';

import { BoquetteService } from './boquette.service';

describe('BoquetteService', () => {
  let service: BoquetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoquetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
