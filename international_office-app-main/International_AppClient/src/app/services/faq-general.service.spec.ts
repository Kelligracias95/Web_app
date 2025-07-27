import { TestBed } from '@angular/core/testing';

import { FaqGeneralService } from './faq-general.service';

describe('FaqGeneralService', () => {
  let service: FaqGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
