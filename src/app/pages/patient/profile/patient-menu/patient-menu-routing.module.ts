import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientMenuPage } from './patient-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PatientMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientMenuPageRoutingModule {}
