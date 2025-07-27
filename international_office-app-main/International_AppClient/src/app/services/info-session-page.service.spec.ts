import { TestBed } from '@angular/core/testing';

import { InfoSessionPageService } from './info-session-page.service';

describe('InfoSessionPageService', () => {
  let service: InfoSessionPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoSessionPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
