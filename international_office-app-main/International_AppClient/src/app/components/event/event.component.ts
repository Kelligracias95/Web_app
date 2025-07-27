import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { TranslateService } from '@ngx-translate/core';

import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from '../../components/translation/translation.component';

import { DatePipe } from '@angular/common';

interface Event {
  id: number;
  attributes: {
    date: string;
    time: string;
    event: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}

interface GroupedEvents {
  dayAndMonth: string;
  events: Event[];
}

interface ApiResponse {
  data: Event[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [DatePipe]
})
export class EventComponent implements OnInit {
  events: Event[] = [];
  groupedEvents: GroupedEvents[] = [];
  

  constructor(
    private eventService: EventService,
    private datePipe: DatePipe,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.loadEvents();

     // Subscribe to language change events
     this.translate.onLangChange.subscribe(() => {
     this.loadEvents();
    });
  }

  loadEvents() {
    // Fetch events for the current language
    const currentLanguage = this.translate.currentLang || 'en';
    this.eventService.getAllEvents('en').subscribe(
      (response: ApiResponse) => {
        console.log('English Events:', response.data);
      },
      (error: any) => {
        console.error('Error fetching English events:', error);
      }
    );
    // Fetch events for German
    this.eventService.getAllEvents('de').subscribe(
      (response: ApiResponse) => {
        console.log('German Events:', response.data);
      },
      (error: any) => {
        console.error('Error fetching German events:', error);
      }
    );
  


    this.eventService.getAllEvents(currentLanguage).subscribe(
      (response: ApiResponse) => {
        if (response && response.data) {
          this.events = response.data;
          this.groupedEvents = this.getSortedEventsByDayAndMonth();
          
        } else {
          console.error('Invalid API response format:', response);
          this.events = [];
          this.groupedEvents = [];
        }
      },
      (error: any) => {
        console.error('Error fetching events:', error);
        this.events = [];
        this.groupedEvents = [];
      }
    );
  }

  formatDate(date: string): string {
    const locale = this.translate.currentLang || 'en';
    return this.datePipe.transform(new Date(date), 'EEEE, dd.MM.yyyy', locale) || '';
  }

  getSortedEventsByDayAndMonth(): GroupedEvents[] {
    const groupedEvents: { [dayAndMonth: string]: Event[] } = {};

    this.events.forEach((event) => {
      const dayAndMonth = this.formatDate(event.attributes.date);
      if (!groupedEvents[dayAndMonth]) {
        groupedEvents[dayAndMonth] = [];
      }
      groupedEvents[dayAndMonth].push(event);
    });

    const sortedDaysAndMonths = Object.keys(groupedEvents).sort((a, b) => {
      const dateA = new Date(a.split(',')[1]);
      const dateB = new Date(b.split(',')[1]);
      return dateA.getTime() - dateB.getTime();
    });

    return sortedDaysAndMonths.map((dayAndMonth) => ({
      dayAndMonth,
      events: groupedEvents[dayAndMonth],
    }));
  }
}
