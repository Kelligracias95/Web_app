import { TestBed } from '@angular/core/testing';

import { DownloadCourseService } from './download-course.service';

describe('DownloadCourseService', () => {
  let service: DownloadCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
