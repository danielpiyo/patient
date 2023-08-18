import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicalSpecialityPage } from './clinical-speciality.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicalSpecialityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicalSpecialityPageRoutingModule {}
