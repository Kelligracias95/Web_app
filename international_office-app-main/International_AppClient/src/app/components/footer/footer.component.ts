import { Component, Input, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from '../../components/translation/translation.component';



@Component({
  
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

 

 
  constructor() { }

  ngOnInit() {}

}
