import { ComponentFixture, TestBed ,async} from '@angular/core/testing';
import { OrientationWeekPage } from './orientation-week.page';

describe('OrientationWeekPage', () => {
  let component: OrientationWeekPage;
  let fixture: ComponentFixture<OrientationWeekPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrientationWeekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
