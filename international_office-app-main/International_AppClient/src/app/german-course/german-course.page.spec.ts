import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GermanCoursePage } from './german-course.page';

describe('GermanCoursePage', () => {
  let component: GermanCoursePage;
  let fixture: ComponentFixture<GermanCoursePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GermanCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
