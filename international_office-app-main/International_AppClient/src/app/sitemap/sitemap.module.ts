import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SitemapPageRoutingModule } from './sitemap-routing.module';
import { SharedComponentsModule } from '../components/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';



import { SitemapPage } from './sitemap.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SharedComponentsModule,
    SitemapPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: SitemapPage
      }
    ])
  ],
  declarations: [SitemapPage]
})
export class SitemapPageModule {}
 