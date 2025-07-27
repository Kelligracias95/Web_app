import { TestBed } from '@angular/core/testing';

import { GermanCourseService } from './german-course.service';

describe('GermanCourseService', () => {
  let service: GermanCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GermanCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
