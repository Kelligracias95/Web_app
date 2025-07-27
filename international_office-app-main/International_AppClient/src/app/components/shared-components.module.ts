import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { EventComponent } from './event/event.component';
import { DownloadComponent } from './download/download.component';
import { EverydaylifeDownloadComponent } from './everydaylife-download/everydaylife-download.component';
import { TranslationComponent } from './translation/translation.component';
import { TranslateModule } from '@ngx-translate/core';

import { InfoSessionDownloadComponent } from './info-session-download/info-session-download.component';
import { DownloadCourseComponent } from './download-course/download-course.component';
import { DownloadITComponent } from './download-it/download-it.component';
import { OverviewComponent } from './overview/overview.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FaqGeneralComponent } from './faq-general/faq-general.component';
import { FaqGeneralCourseComponent } from './faq-general-course/faq-general-course.component';
import { FaqLateArrivalComponent } from './faq-late-arrival/faq-late-arrival.component';
import { FaqLifeDeggendorfComponent } from './faq-life-deggendorf/faq-life-deggendorf.component';
import { FaqOtherCourseComponent } from './faq-other-course/faq-other-course.component';
import { FaqPickupServiceComponent } from './faq-pickup-service/faq-pickup-service.component';




@NgModule({
  declarations: [HeaderComponent,FooterComponent,
    EventComponent,DownloadComponent,
    EverydaylifeDownloadComponent,
    InfoSessionDownloadComponent,
    DownloadCourseComponent,
    DownloadITComponent,
    OverviewComponent,
    ScheduleComponent,
    FaqGeneralComponent,
    FaqOtherCourseComponent,
    TranslationComponent,
  
   
   
    FaqGeneralCourseComponent,
    FaqLateArrivalComponent,
    FaqLifeDeggendorfComponent,
    FaqPickupServiceComponent,
   
   
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    TranslateModule
  ],
  exports: [HeaderComponent,FooterComponent,
    EventComponent,DownloadComponent,
    EverydaylifeDownloadComponent,
    InfoSessionDownloadComponent,
    DownloadCourseComponent,
    DownloadITComponent,
    OverviewComponent,
    ScheduleComponent,
    FaqGeneralComponent,
    TranslationComponent,
  
    
    FaqGeneralCourseComponent,
   
    FaqLateArrivalComponent,
    FaqLifeDeggendorfComponent,
    FaqOtherCourseComponent,
    FaqPickupServiceComponent,
   
    
    ]
})
export class SharedComponentsModule { }
