import { Component, OnInit } from '@angular/core';
import { IntegrationEventService } from 'src/app/services/integration-event.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

interface Icon {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: any;  
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;  
    createdAt: string;
    updatedAt: string;
  };
}

interface Integration {
  id: number;
  attributes: {
    description: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    icon: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      }[];
    };
    localizations?: {
      data: {
        id: number;
        attributes: {
          description: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          locale: string;
          title: string;
        };
      }[];
    };
  };
}

interface ApiResponse {
  data: Integration[];
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
  selector: 'app-integration-veransatltung',
  templateUrl: './integration-veransatltung.page.html',
  styleUrls: ['./integration-veransatltung.page.scss'],
})
export class IntegrationVeransatltungPage implements OnInit {
  
  environment = environment;

  integrationEventPages: Integration[] = [];
  pagination: any = {};
  iconData: any;

  constructor(private integrationEventService: IntegrationEventService,
    private translate: TranslateService) {}

  ngOnInit() {

    this.loadIntegrationEventPages('en');
    
    
    this.translate.onLangChange.subscribe((event) => {
      
      this.loadIntegrationEventPages(event.lang);
    });
  }
  
  loadIntegrationEventPages(language: string) {
    // Fetch texts for the given language
    this.integrationEventService.getAllIntegrationEvents(language).subscribe(
      (response: ApiResponse) => {
        console.log(`IntegrationEvents for ${language}:`, response.data);
        this.integrationEventPages = response.data;
        this.pagination = response.meta.pagination;
      },
      (error: any) => {
        console.error(`Error fetching integrationEvent for ${language}:`, error);
      }
    );
  }
}
