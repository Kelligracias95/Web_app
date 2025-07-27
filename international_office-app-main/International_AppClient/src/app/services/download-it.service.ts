import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DownloadITService {

  private apiUrl = `${environment.API}/api/download-its?populate=*`;

  constructor(private http: HttpClient) { }

  getAllDownloads(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getDownload(downloadId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${downloadId}`);
  }


  
}