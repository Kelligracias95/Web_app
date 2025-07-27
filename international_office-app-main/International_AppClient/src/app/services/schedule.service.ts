import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';

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

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  API = `${environment.API}/api/schedules`;

  
  constructor(private http: HttpClient) { }

  getAllSchedules(language: string): Observable<Schedule[]> {
    const url = `${this.API}?locale=${language}&populate=*`;
    return this.http.get<any>(url).pipe(
      map((response: any) => {
        const dataArray = Array.isArray(response) ? response : response.data;
  
  
        return dataArray.map((item: any) => {
          return {
            id: item.id,
            attributes: item.attributes
          };
        });
      })
    );
  }
}
