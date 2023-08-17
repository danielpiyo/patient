import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicianDetailPage } from './clinician-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicianDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicianDetailPageRoutingModule {}
