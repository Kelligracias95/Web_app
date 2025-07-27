import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from 'src/app/components/translation/translation.component';



@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.page.html',
  styleUrls: ['./sitemap.page.scss'],
})
export class SitemapPage implements OnInit {
  safeUrl: any;

  ngOnInit(): void {
    
  }

  constructor() {
   
}
}
