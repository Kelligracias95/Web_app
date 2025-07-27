import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';



import { OrientationWeekPageRoutingModule } from './orientation-week-routing.module';

import { OrientationWeekPage } from './orientation-week.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SharedComponentsModule,
    OrientationWeekPageRoutingModule
  ],
  declarations: [OrientationWeekPage]
})
export class OrientationWeekPageModule {}
