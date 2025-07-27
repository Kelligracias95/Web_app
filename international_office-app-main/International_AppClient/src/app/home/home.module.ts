import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedComponentsModule } from '../components/shared-components.module';







import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





import { HomePageRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsModule,
    TranslateModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage ]
})
export class HomePageModule {}
