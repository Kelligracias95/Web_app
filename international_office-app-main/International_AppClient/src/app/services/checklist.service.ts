import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, of } from 'rxjs';


export interface ChecklistItem {
  name: any;
  title: any;
  id: number;
  attributes: {
    name: string;
    title: string;
    createdAt: string; 
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}



@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  constructor(private http: HttpClient) {}

  API = `${environment.API}/api/checklists`;

  fetchChecklistItems() {
    return this.http.get<any>(this.API).pipe(
      map(response => response.data),
      catchError(error => {
        console.error('Error fetching checklist items:', error);
        return of([]); 
      })
    );
  }
}

