import { Component, OnDestroy, OnInit } from '@angular/core';
import { OverviewService } from 'src/app/services/overview.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from '../../components/translation/translation.component';



interface Orientierungsweekpage {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title1: string | null;
    title2: string | null;
    title3: string | null;
    text1: string | null;
    text2: string | null;
    text3: string | null;
    text4: string | null;
    locale: string;
  
  };
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {
  orientierungsweekpages: Orientierungsweekpage[] = [];
  private languageChangeSubscription: Subscription | undefined;

  constructor(private overviewService: OverviewService, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.loadOrientierungsweekpages('en');

    this.languageChangeSubscription = this.translate.onLangChange.subscribe((event) => {
      this.loadOrientierungsweekpages(event.lang);
    });
  }

  ngOnDestroy() {
    if (this.languageChangeSubscription) {
      this.languageChangeSubscription.unsubscribe();
    }
  }

  loadOrientierungsweekpages(language: string) {
    this.overviewService.getAllOrientierungsweekpages(language).subscribe(
      (response: Orientierungsweekpage[]) => {
        this.orientierungsweekpages = response;
      },
      (error: any) => {
        console.error(`Error fetching ${language} Orientierungsweekpages:`, error);
        this.orientierungsweekpages = [];
      }
    );
  }
}
