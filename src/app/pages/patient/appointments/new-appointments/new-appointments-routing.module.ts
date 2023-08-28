import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAppointmentsPage } from './new-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: NewAppointmentsPage,
  },
  {
    path: 'newpayment',
    loadChildren: () =>
      import('../../payment/newpayment/newpayment.module').then(
        (m) => m.NewpaymentPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAppointmentsPageRoutingModule {}
