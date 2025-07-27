import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';



import { GermanCoursePageRoutingModule } from './german-course-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

import { GermanCoursePage } from './german-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SharedComponentsModule,
    GermanCoursePageRoutingModule
  ],
  declarations: [GermanCoursePage]
})
export class GermanCoursePageModule {}
