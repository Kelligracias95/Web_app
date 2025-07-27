import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { OrientationWeekPageModule } from './service/orientation-week/orientation-week.module';
import { CourseSelectionPageModule } from './service/course-selection/course-selection.module';
import { InformativeSessionPageModule } from './service/informative-session/informative-session.module';
import { FaqPageModule } from './service/faq/faq.module';
import { IntegrationVeransatltungPageModule } from './service/integration-veransatltung/integration-veransatltung.module';

import { ContactPageModule } from './service/contact/contact.module';
import { PickupServicePageModule } from './service/pickup-service/pickup-service.module';
import { HomePage } from './home/home.page';
import { PickupServicePage } from './service/pickup-service/pickup-service.page';
import { MenuPageModule } from  './menu/menu.module';
import { RegisterPage } from './register/register.page';
import { LoginPage } from './login/login.page';
import { ChecklistPage } from './checklist/checklist.page';





const routes: Routes = [

 
 

  
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },

  {
    path: '', component:HomePage },

    {
      path: 'pickup-service', component:PickupServicePage },
  

   
   

  



  {
    path: 'orientation-week',
    loadChildren: () => import('./service/orientation-week/orientation-week.module').then( m => m.OrientationWeekPageModule)
  },
  {
    path: 'course-selection',
    loadChildren: () => import('./service/course-selection/course-selection.module').then( m => m.CourseSelectionPageModule)
  },
  {
    path: 'informative-session',
    loadChildren: () => import('./service/informative-session/informative-session.module').then( m => m.InformativeSessionPageModule)
  },
 
  {
    path: 'integration-veransatltung',
    loadChildren: () => import('./service/integration-veransatltung/integration-veransatltung.module').then( m => m.IntegrationVeransatltungPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./service/faq/faq.module').then( m => m.FaqPageModule)
  },
  
  
  {
    path: 'pickup-service',
    loadChildren: () => import('./service/pickup-service/pickup-service.module').then( m => m.PickupServicePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./service/contact/contact.module').then( m => m.ContactPageModule)
  },
 
  {
    path: 'german-course',
    loadChildren: () => import('./german-course/german-course.module').then( m => m.GermanCoursePageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'checklist',
    loadChildren: () => import('./checklist/checklist.module').then( m => m.ChecklistPageModule)
  },
  
 
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
