import { TestBed } from '@angular/core/testing';

import { FaqOtherCourseService } from './faq-other-course.service';

describe('FaqOtherCourseService', () => {
  let service: FaqOtherCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqOtherCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
