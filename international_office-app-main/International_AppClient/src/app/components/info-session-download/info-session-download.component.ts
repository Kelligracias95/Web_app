import { Component, OnInit } from '@angular/core';
import { InfoSessionDownloadService } from '../../services/info-session-download.service';
import { environment } from 'src/environments/environment';

import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from '../../components/translation/translation.component';



interface  Download {
  id: number;
  title: string;
  text: string; 
  attributes: {
    pdfFile: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      }[];
    };
  };
}


@Component({
  
  selector: 'app-info-session-download',
  templateUrl: './info-session-download.component.html',
  styleUrls: ['./info-session-download.component.scss'],
})
export class InfoSessionDownloadComponent  implements OnInit {
  downloads: Download[] = [];
  environment = environment;

  constructor(private downloadService: InfoSessionDownloadService) { }

  ngOnInit() {
    this.loadDownloads();
  }

  loadDownloads() {
    this.downloadService.getAllDownloads().subscribe(
      (response) => {
        if (response && response.data) {
          this.downloads = response.data;
        } else {
          console.error('Invalid API response format:', response);
          this.downloads = [];
        }
      },
      (error) => {
        console.error('Error fetching downloads:', error);
        this.downloads = [];
      }
    );
  }

  downloadPdf(pdfUrl: string) {
    window.open(pdfUrl, '_blank');
  }
}