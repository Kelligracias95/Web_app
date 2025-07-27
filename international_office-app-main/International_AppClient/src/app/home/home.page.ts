import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from '../components/translation/translation.component';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('700ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('700ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})

export class HomePage implements OnDestroy {



  images = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://study-eu.s3.amazonaws.com/uploads/image/path/573/wide_fullhd_deggendorf-institute-of-technology-imagepic-03.jpg',
    'https://atptranslations.com/wp-content/uploads/2018/12/AdobeStock_58939979-e1626924072313.jpeg',
  ];

  currentIndex = 0;
  private slideInterval: any;

  constructor(private router: Router) {}


  /*
  constructor(private router: Router, private translate: TranslateService) {
    // Set the default language
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();

    if (browserLang !== undefined) {
      translate.use(browserLang);
    } else {
      // Fallback to a default language if browserLang is undefined
      translate.use('de'); // Change 'en' to your desired default language code
    }


  }
  */

  ngOnInit() {
    this.startAutoSlide();


  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);

  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.showNext();
    }, 3000); 
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  showPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }


  goToOrientationWeekPage() {
    this.router.navigate(['/orientation-week']);
  }

  goToCourseSelectionPage() {
    this.router.navigate(['/course-selection']);
  }
  goToInformationSessionPage() {
    this.router.navigate(['/informative-session']);
  }
  goIntegrationEventPage() {
    this.router.navigate(['/integration-veransatltung']);

  }
  goToPickupServicePage() {
    this.router.navigate(['/pickup-service']);
  }
  goToFaqPage() {
    this.router.navigate(['/faq']);
  }
  goToContactPage() {
    this.router.navigate(['/contact']);

  }



  

}
