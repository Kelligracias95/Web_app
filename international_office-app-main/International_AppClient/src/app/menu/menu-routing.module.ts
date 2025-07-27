import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'service',
        loadChildren: () => import('../service/service.module').then( m => m.ServicePageModule)
      },
      {
        path: 'sitemap',
        loadChildren: () => import('../sitemap/sitemap.module').then( m => m.SitemapPageModule)
      }
    ]
  }
];

 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
