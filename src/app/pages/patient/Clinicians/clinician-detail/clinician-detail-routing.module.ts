import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicianDetailPage } from './clinician-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicianDetailPage,
  },
  {
    path: 'appointment/:clinicianId',
    loadChildren: () =>
      import(
        '../../appointments/new-appointments/new-appointments.module'
      ).then((m) => m.NewAppointmentsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicianDetailPageRoutingModule {}
