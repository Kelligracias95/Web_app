import { TestBed } from '@angular/core/testing';

import { FaqPickupServiceService } from './faq-pickup-service.service';

describe('FaqPickupServiceService', () => {
  let service: FaqPickupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqPickupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
