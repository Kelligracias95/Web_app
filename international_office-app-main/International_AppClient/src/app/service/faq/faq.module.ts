import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


import { IonicModule } from '@ionic/angular';

import { FaqPageRoutingModule } from './faq-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';


import { FaqPage } from './faq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    FaqPageRoutingModule,
    SharedComponentsModule 
  ],
  declarations: [FaqPage]
})
export class FaqPageModule {}
