import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NursesSpecialityPage } from './nurses-speciality.page';

const routes: Routes = [
  {
    path: '',
    component: NursesSpecialityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NursesSpecialityPageRoutingModule {}
