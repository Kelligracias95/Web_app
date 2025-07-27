import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformativeSessionPage } from './informative-session.page';

const routes: Routes = [
  {
    path: '',
    component: InformativeSessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformativeSessionPageRoutingModule {}
