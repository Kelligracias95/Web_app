import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import { SitemapPage } from './sitemap.page';

describe('SitemapPage', () => {
  let component: SitemapPage;
  let fixture: ComponentFixture<SitemapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SitemapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
