import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = `${environment.API}/api/events`;

  constructor(private http: HttpClient) {}

  getAllEvents(language: string): Observable<any> {
    const url = `${this.apiUrl}?_locale=${language}&populate=*`; 
    return this.http.get<any>(url).pipe(
      map((response) => this.transformResponse(response, language))
    );
  }

  getEvent(eventId: number, language: string): Observable<any> {
    const url = `${this.apiUrl}/${eventId}?_locale=${language}&populate=*`; 
    return this.http.get<any>(url).pipe(
      map((response) => this.transformResponse(response, language))
    );
  }

  // Method to transform the API response
  private transformResponse(response: any, language: string): any {
    if (response && response.data) {
      
      response.data = response.data.map((event: any) => {
        if (event.attributes.localizations) {
          const localization = event.attributes.localizations.data.find(
            (loc: any) => loc.attributes.locale === language
          );
          if (localization) {
            event.attributes = localization.attributes;
          }
        }
        return event;
      });
    }
    return response;
  }
}
