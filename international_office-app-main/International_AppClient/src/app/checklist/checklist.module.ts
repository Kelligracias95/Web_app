import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { ChecklistPageRoutingModule } from './checklist-routing.module';




import { SharedComponentsModule } from 'src/app/components/shared-components.module';

import { ChecklistPage } from './checklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SharedComponentsModule,
    ChecklistPageRoutingModule
  ],
  declarations: [ChecklistPage]
})
export class ChecklistPageModule {}
