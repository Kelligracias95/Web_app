import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InformativeSessionPage } from './informative-session.page';

describe('InformativeSessionPage', () => {
  let component: InformativeSessionPage;
  let fixture: ComponentFixture<InformativeSessionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformativeSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
