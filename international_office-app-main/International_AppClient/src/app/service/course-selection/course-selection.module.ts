import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { TranslateModule } from '@ngx-translate/core';


import { CourseSelectionPageRoutingModule } from './course-selection-routing.module';

import { CourseSelectionPage } from './course-selection.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    IonicModule,
    SharedComponentsModule,
    
    CourseSelectionPageRoutingModule
  ],
  declarations: [CourseSelectionPage]
})
export class CourseSelectionPageModule {}
