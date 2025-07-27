
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class IntegrationEventService {
  private apiUrl = `${environment.API}/api/integration-event-pages`;
  
  

 constructor(private http: HttpClient) { }


 getAllIntegrationEvents(language: string): Observable<any> {
  const url = `${this.apiUrl}?locale=${language}&populate=*`
  return this.http.get<any>(url).pipe(
    map((response) => this.transformResponse(response, language))
  );
}



IntegrationEvents(integrationEventPageId: number, language: string): Observable<any> {
  const url = `${this.apiUrl}/${integrationEventPageId}?locale=${language}&populate=*`; 
  return this.http.get<any>(url).pipe(
    map((response) => this.transformResponse(response, language))
  );
}

private transformResponse(response: any, language: string): any {
  console.log('Original response:', response);

  if (response && response.data) {
    response.data = response.data.map((integrationEventPage: any) => {
      console.log('IntegrationEvent before transformation:', integrationEventPage);

      if ( integrationEventPage.attributes.localizations) {
        const localization =integrationEventPage.attributes.localizations.data.find(
          (loc: any) => loc.attributes.locale === language
        );
        if (localization) {
          integrationEventPage.attributes = localization.attributes;
        }
      }

      
      if (integrationEventPage.attributes.icon) {
        const iconLocalization = integrationEventPage.attributes.icon.data.find(
          (icon: any) => icon.attributes.locale === language
        );
        if (iconLocalization) {
          integrationEventPage.attributes.icon.data = [iconLocalization.attributes];
        } else {
          
          const defaultIcon = integrationEventPage.attributes.icon.data.find(
            (icon: any) => icon.attributes.locale === 'en'
          );
          if (defaultIcon) {
            integrationEventPage.attributes.icon.data = [defaultIcon.attributes];
          }
        }
      }

      console.log('Text after transformation:',integrationEventPage);
      return integrationEventPage;
    });
  }

  console.log('Transformed response:', response);
  return response;
}
}


  
