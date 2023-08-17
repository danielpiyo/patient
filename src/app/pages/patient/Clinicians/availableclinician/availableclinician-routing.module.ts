import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailableclinicianPage } from './availableclinician.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableclinicianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailableclinicianPageRoutingModule {}
