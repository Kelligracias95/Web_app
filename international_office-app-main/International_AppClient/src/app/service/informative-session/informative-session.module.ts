import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';


import { MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedComponentsModule } from '../../components/shared-components.module';



import { IonicModule } from '@ionic/angular';

import { InformativeSessionPageRoutingModule } from './informative-session-routing.module';

import { InformativeSessionPage } from './informative-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule ,
    MatToolbarModule,
    TranslateModule,
    SharedComponentsModule,
    InformativeSessionPageRoutingModule
  ],
  declarations: [InformativeSessionPage]
})
export class InformativeSessionPageModule {}
