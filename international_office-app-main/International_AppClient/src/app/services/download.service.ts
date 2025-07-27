import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(private http: HttpClient) {}

  downloadFile(filename: string): Observable<Blob> {
    const filePath = `assets/documents/${filename}`;
    return this.http.get(filePath, { responseType: 'blob' });
  }
}