import { ComponentFixture, TestBed ,async} from '@angular/core/testing';
import { PickupServicePage } from './pickup-service.page';

describe('PickupServicePage', () => {
  let component: PickupServicePage;
  let fixture: ComponentFixture<PickupServicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PickupServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
