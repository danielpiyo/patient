import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailableclinicianPage } from './availableclinician.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableclinicianPage,
  },
  {
    path: 'clinician/:clinicianId',
    loadChildren: () =>
      import('../../Clinicians/clinician-detail/clinician-detail.module').then(
        (m) => m.ClinicianDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailableclinicianPageRoutingModule {}
