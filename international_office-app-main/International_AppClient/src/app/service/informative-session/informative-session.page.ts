import { Component, OnInit } from '@angular/core';
import { InfoSessionPageService } from '../../services/info-session-page.service';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-informative-session',
  templateUrl: './informative-session.page.html',
  styleUrls: ['./informative-session.page.scss'],
})
export class InformativeSessionPage implements OnInit {

  infoSessionPages: any[] = [];
  environment = environment;

  constructor(
    private infoSessionPageService: InfoSessionPageService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.loadInfoSessionPages();
  }
  
  loadInfoSessionPages() {
    const currentLanguage = this.translateService.currentLang || this.translateService.defaultLang;
    this.infoSessionPageService.getAllDownloads(currentLanguage).subscribe(
      (response) => {
        if (response && response.data) {
          this.infoSessionPages = response.data;
        } else {
          console.error('Invalid API response format:', response);
          this.infoSessionPages = [];
        }
      },
      (error) => {
        console.error('Error fetching info session pages:', error);
        this.infoSessionPages = [];
      }
    );
  }

  downloadPdf(pdfUrl: string) {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'downloaded-file.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}