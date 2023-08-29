import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpaymentPage } from './newpayment.page';

const routes: Routes = [
  {
    path: '',
    component: NewpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpaymentPageRoutingModule {}
