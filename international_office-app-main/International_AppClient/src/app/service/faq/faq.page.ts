import { Component, OnDestroy, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from 'src/app/components/translation/translation.component';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit, OnDestroy {
  

  constructor() {
   
    
  }

  ngOnInit() {
    
   
  }

  ngOnDestroy() {
   
  }

}