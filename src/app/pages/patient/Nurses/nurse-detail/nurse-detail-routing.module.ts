import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NurseDetailPage } from './nurse-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NurseDetailPage,
  },
  {
    path: 'appointment/:nurseId',

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
export class NurseDetailPageRoutingModule {}
