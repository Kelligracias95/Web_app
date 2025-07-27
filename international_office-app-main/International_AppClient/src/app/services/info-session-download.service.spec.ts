import { TestBed } from '@angular/core/testing';

import { InfoSessionDownloadService } from './info-session-download.service';

describe('InfoSessionDownloadService', () => {
  let service: InfoSessionDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoSessionDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
