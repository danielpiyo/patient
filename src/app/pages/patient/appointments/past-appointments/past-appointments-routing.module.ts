import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastAppointmentsPage } from './past-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: PastAppointmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastAppointmentsPageRoutingModule {}
