import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable,  map } from 'rxjs';


export interface Orientierungsweekpage {
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




@Injectable({
  providedIn: 'root'
})
export class OverviewService {




constructor(private http: HttpClient) {}

  API = `${environment.API}/api/overviews`;

  getAllOrientierungsweekpages(language: string): Observable<Orientierungsweekpage[]> {
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