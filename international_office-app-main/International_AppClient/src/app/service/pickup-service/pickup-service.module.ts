import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



import { PickupServicePageRoutingModule } from './pickup-service-routing.module';

import { PickupServicePage } from './pickup-service.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    PickupServicePageRoutingModule
  ],
  declarations: [PickupServicePage]
})
export class PickupServicePageModule {}
