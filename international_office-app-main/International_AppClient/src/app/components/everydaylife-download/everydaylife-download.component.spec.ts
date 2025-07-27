import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EverydaylifeDownloadComponent } from './everydaylife-download.component';

describe('EverydaylifeDownloadComponent', () => {
  let component: EverydaylifeDownloadComponent;
  let fixture: ComponentFixture<EverydaylifeDownloadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EverydaylifeDownloadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EverydaylifeDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
