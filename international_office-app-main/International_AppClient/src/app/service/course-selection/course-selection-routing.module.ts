import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseSelectionPage } from './course-selection.page';

const routes: Routes = [
  {
    path: '',
    component: CourseSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseSelectionPageRoutingModule {}
