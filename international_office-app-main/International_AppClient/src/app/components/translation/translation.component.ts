import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  template: `
  <ion-buttons slot="end">
    <ion-button (click)="switchLanguage('de')">DE</ion-button>
    <ion-button (click)="switchLanguage('en')">EN</ion-button>
  </ion-buttons>
  `,
})
export class TranslationComponent {
  constructor(private translate: TranslateService) {

    //  default language
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();

    if (browserLang !== undefined) {
      translate.use(browserLang);
    } else {

      translate.use('de');
    }


  }


  switchLanguage(language: string): void {
    this.translate.use(language);
  }

}







