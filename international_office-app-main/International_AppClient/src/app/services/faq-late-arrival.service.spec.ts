import { TestBed } from '@angular/core/testing';

import { FaqLateArrivalService } from './faq-late-arrival.service';

describe('FaqLateArrivalService', () => {
  let service: FaqLateArrivalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqLateArrivalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
