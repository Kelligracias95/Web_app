import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrientationWeekPage } from './orientation-week.page';

const routes: Routes = [
  {
    path: '',
    component: OrientationWeekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrientationWeekPageRoutingModule {}
