import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaqLifeDeggendorfService } from 'src/app/services/faq-life-deggendorf.service';
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
  selector: 'app-faq-life-deggendorf',
  templateUrl: './faq-life-deggendorf.component.html',
  styleUrls: ['./faq-life-deggendorf.component.scss'],
})
export class FaqLifeDeggendorfComponent  implements OnInit {


  faqs: Faq[] = [];
  private languageChangeSubscription: Subscription | undefined;

  constructor(private faqLifeDeggendorfService: FaqLifeDeggendorfService, private translate: TranslateService) {
   
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
    this.faqLifeDeggendorfService.getAllFaqs(language).subscribe(
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
