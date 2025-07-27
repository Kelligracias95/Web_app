
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqGeneralCourseService {

  private apiUrl = `${environment.API}/api/faq-german-courses`;

  constructor(private http: HttpClient) { }

  getAllFaqs(language: string): Observable<Faq[]> {
    const url = `${this.apiUrl}?locale=${language}&populate=*`;
    return this.http.get<any>(url).pipe(
      map((response: any) => {
        return response.data.map((item: any) => {
          return {
            id: item.id,
            attributes: item.attributes,
            showAnswer: false
          };
        });
      })
    );
  }

 // Method to transform the API response
 private transformResponse(response: any, language: string): any {
  if (response && response.data) {
    
    response.data = response.data.map((item: any) => {
      if (item.attributes.localizations) {
        const localization = item.attributes.localizations.data.find(
          (loc: any) => loc.attributes.locale === language
        );
        if (localization) {
          item.attributes = localization.attributes;
        }
      }
      return item;
    });
  }
  return response;
}



}
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

 
 

