import { TestBed } from '@angular/core/testing';

import { FaqLifeDeggendorfService } from './faq-life-deggendorf.service';

describe('FaqLifeDeggendorfService', () => {
  let service: FaqLifeDeggendorfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqLifeDeggendorfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
