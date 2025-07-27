import { TestBed } from '@angular/core/testing';

import { FaqGeneralCourseService } from './faq-general-course.service';

describe('FaqGeneralCourseService', () => {
  let service: FaqGeneralCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqGeneralCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
