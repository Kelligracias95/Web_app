import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegrationVeransatltungPage } from './integration-veransatltung.page';

const routes: Routes = [
  {
    path: '',
    component: IntegrationVeransatltungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegrationVeransatltungPageRoutingModule {}
