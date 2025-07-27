import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaqLifeDeggendorfComponent } from './faq-life-deggendorf.component';

describe('FaqLifeDeggendorfComponent', () => {
  let component: FaqLifeDeggendorfComponent;
  let fixture: ComponentFixture<FaqLifeDeggendorfComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqLifeDeggendorfComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaqLifeDeggendorfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
