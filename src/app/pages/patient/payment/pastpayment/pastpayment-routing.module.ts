import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastpaymentPage } from './pastpayment.page';

const routes: Routes = [
  {
    path: '',
    component: PastpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastpaymentPageRoutingModule {}
