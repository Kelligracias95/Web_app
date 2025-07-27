import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from 'src/app/components/translation/translation.component';



@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.page.html',
  styleUrls: ['./course-selection.page.scss'],
})
export class CourseSelectionPage implements OnInit {
  activeSection: string = 'german-study-course';

  constructor(private router: Router) {}

  goToGastPage() {
    
    this.router.navigate(['/login']);
    this.router.navigate(['/register']);
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
    const sidebar = document.querySelector('.bubble-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('sidebar-hidden');
     
    }
  }
}
