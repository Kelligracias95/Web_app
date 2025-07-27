import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GermanCoursePage } from './german-course.page';

const routes: Routes = [
  {
    path: '',
    component: GermanCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GermanCoursePageRoutingModule {}
