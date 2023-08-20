import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientOnboardPage } from './patient-onboard.page';

const routes: Routes = [
  {
    path: '',
    component: PatientOnboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientOnboardPageRoutingModule {}
