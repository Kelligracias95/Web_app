import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import { CourseSelectionPage } from './course-selection.page';

describe('CourseSelectionPage', () => {
  let component: CourseSelectionPage;
  let fixture: ComponentFixture<CourseSelectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CourseSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
