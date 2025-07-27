import { Component, OnInit , NgIterable} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from 'src/app/components/translation/translation.component';







@Component({
  selector: 'app-orientation-week',
  templateUrl: './orientation-week.page.html',

  styleUrls: ['./orientation-week.page.scss'],
})
export class OrientationWeekPage implements OnInit {
  activeSection: string = 'overview';
  

 

 constructor( ) {
    
   
  }

  
  
  ngOnInit() {
    
  }
  
  
  scrollTo(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  

  toggleSidebarVisibility() {
    const sidebar = document.querySelector('.col-lg-2');
    if (sidebar) {
      sidebar.classList.toggle('d-none');
    }
  }




  
  

}
