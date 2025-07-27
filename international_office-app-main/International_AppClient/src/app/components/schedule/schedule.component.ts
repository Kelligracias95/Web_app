import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';



import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from '../../components/translation/translation.component';






export interface Schedule {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title1: string | null;
    text1: string | null;
    text2: string | null;
    text3: string | null;
    text4: string | null;
    text5: string | null;
    text6: string | null;
    text7: string | null;
    text8: string | null;
    title2: string | null;

    text9: string | null;
    title3: string | null;

    text10: string | null;
    title4: string | null;
    text11: string | null;
    text12: string | null;
    locale: string;
  };
}


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit, OnDestroy {
  schedules: Schedule[] = [];
  selectedIndex: number = 2;

  private languageChangeSubscription: Subscription | undefined;

  constructor(private scheduleService: ScheduleService, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.loadSchedules('en');

    this.languageChangeSubscription = this.translate.onLangChange.subscribe((event) => {
      this.loadSchedules(event.lang);
    });
  }

  ngOnDestroy() {
    if (this.languageChangeSubscription) {
      this.languageChangeSubscription.unsubscribe();
    }
  }

  loadSchedules(language: string) {
    this.scheduleService.getAllSchedules(language).subscribe(
      (response: Schedule[]) => {
        
        this.schedules = response;
      },
      (error: any) => {
        console.error(`Error fetching ${language} Schedules:`, error);
        this.schedules = [];
      }
    );
  }
}
