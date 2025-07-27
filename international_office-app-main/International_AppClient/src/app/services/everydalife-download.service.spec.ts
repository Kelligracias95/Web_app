import { TestBed } from '@angular/core/testing';

import { EverydalifeDownloadService } from './everydalife-download.service';

describe('EverydalifeDownloadService', () => {
  let service: EverydalifeDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EverydalifeDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
