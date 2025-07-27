import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';


import { IntegrationVeransatltungPageRoutingModule } from './integration-veransatltung-routing.module';

import { IntegrationVeransatltungPage } from './integration-veransatltung.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    TranslateModule,
    SharedComponentsModule,
    IntegrationVeransatltungPageRoutingModule
  ],
  declarations: [IntegrationVeransatltungPage]
})
export class IntegrationVeransatltungPageModule {}
