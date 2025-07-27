import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class InfoSessionDownloadService {

  private apiUrl = `${environment.API}/api/info-session-downloads?populate=*`;

  constructor(private http: HttpClient) { }

  getAllDownloads(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getDownload(downloadId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${downloadId}`);
  }


  
}