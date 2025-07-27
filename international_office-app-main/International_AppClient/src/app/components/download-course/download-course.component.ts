import { Component, OnInit } from '@angular/core';
import { DownloadCourseService } from 'src/app/services/download-course.service';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationComponent } from '../../components/translation/translation.component';


interface Download {
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
  
  selector: 'app-download-course',
  templateUrl: './download-course.component.html',
  styleUrls: ['./download-course.component.scss'],
})
export class DownloadCourseComponent  implements OnInit {
  downloads: Download[] = [];
  environment = environment;

  constructor(private downloadCourseService: DownloadCourseService ) { } 

  ngOnInit() {
    this.loadDownloads();
  }

  loadDownloads() {
    this.downloadCourseService.getAllDownloads().subscribe(
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