import { TestBed } from '@angular/core/testing';

import { DownloadITService } from './download-it.service';

describe('DownloadITService', () => {
  let service: DownloadITService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadITService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
