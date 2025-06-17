import { TestBed } from '@angular/core/testing';

import { FrequentflyerService } from './frequentflyer-service';

describe('FrequentflyerService', () => {
  let service: FrequentflyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrequentflyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
