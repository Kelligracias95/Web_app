import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IntegrationVeransatltungPage } from './integration-veransatltung.page';

describe('IntegrationVeransatltungPage', () => {
  let component: IntegrationVeransatltungPage;
  let fixture: ComponentFixture<IntegrationVeransatltungPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IntegrationVeransatltungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
