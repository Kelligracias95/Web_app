import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicePage } from './service.page';

const routes: Routes = [
  {
    path: '',
    component: ServicePage
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'course-selection',
    loadChildren: () => import('./course-selection/course-selection.module').then( m => m.CourseSelectionPageModule)
  },
  
  
  {
    path: 'orientation-week',
    loadChildren: () => import('./orientation-week/orientation-week.module').then( m => m.OrientationWeekPageModule)
  },
  {
    path: 'pickup-service',
    loadChildren: () => import('./pickup-service/pickup-service.module').then( m => m.PickupServicePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'informative-session',
    loadChildren: () => import('./informative-session/informative-session.module').then( m => m.InformativeSessionPageModule)
  },
  {
    path: 'integration-veransatltung',
    loadChildren: () => import('./integration-veransatltung/integration-veransatltung.module').then( m => m.IntegrationVeransatltungPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicePageRoutingModule {}
