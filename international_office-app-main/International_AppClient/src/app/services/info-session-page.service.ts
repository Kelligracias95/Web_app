import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoSessionPageService {

  private apiUrl = `${environment.API}/api/info-session-pages?populate=*`;

  constructor(private http: HttpClient) { }

  getAllDownloads(language: string): Observable<any> {
    const url = `${this.apiUrl}&_locale=${language}`; 
    return this.http.get<any>(url).pipe(
      map((response) => this.transformResponse(response, language))
    );
  }

  getDownload(downloadId: number, language: string): Observable<any> {
    const url = `${this.apiUrl}/${downloadId}?_locale=${language}`; 
    return this.http.get<any>(url).pipe(
      map((response) => this.transformResponse(response, language))
    );
  }

  // Method to transform the API response
  private transformResponse(response: any, language: string): any {
    if (response && response.data) {
      response.data = response.data.map((infoSession: any) => {
        if (infoSession.attributes.localizations) {
          const localization = infoSession.attributes.localizations.data.find(
            (loc: any) => loc.attributes.locale === language
          );
          if (localization) {
            infoSession.attributes = localization.attributes;
          }
        }
        return infoSession;
      });
    }
    return response;
  }
}
