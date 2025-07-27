import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupServicePage } from './pickup-service.page';

const routes: Routes = [
  {
    path: '',
    component: PickupServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupServicePageRoutingModule {}
