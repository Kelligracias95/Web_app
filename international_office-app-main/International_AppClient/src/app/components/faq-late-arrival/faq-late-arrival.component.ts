import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaqLateArrivalService } from 'src/app/services/faq-late-arrival.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from 'src/app/components/translation/translation.component';
import { Subscription } from 'rxjs';

interface Faq {
  id: number;
  attributes: {
    question: string;
    answer: Answer[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
  showAnswer: boolean;
}

interface Answer {
  type: string;
  children: Children[];
}

interface Children {
  text: string;
  type: string;
}


@Component({
  selector: 'app-faq-late-arrival',
  templateUrl: './faq-late-arrival.component.html',
  styleUrls: ['./faq-late-arrival.component.scss'],
})
export class FaqLateArrivalComponent  implements OnInit {

  faqs: Faq[] = [];
  private languageChangeSubscription: Subscription | undefined;

  constructor(private faqLateArrivalService: FaqLateArrivalService, private translate: TranslateService) {
   
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    
    this.loadFaqs('en');

    
    this.languageChangeSubscription = this.translate.onLangChange.subscribe((event) => {
     
      this.loadFaqs(event.lang);
    });
  }

  ngOnDestroy() {
    
    if (this.languageChangeSubscription) {
      this.languageChangeSubscription.unsubscribe();
    }
  }

  loadFaqs(language: string) {
    this.faqLateArrivalService.getAllFaqs(language).subscribe(
      (response: Faq[]) => {
        this.faqs = response;
      },
      (error: any) => {
        console.error(`Error fetching ${language} FAQs:`, error);
        this.faqs = [];
      }
    );
  }

  toggleAnswer(faq: Faq) {
    faq.showAnswer = !faq.showAnswer;
  }
}
