import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceDetailPage } from './service-detail.page';
import { AuthGuard } from '../../shared-resources/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ServiceDetailPage,
  },
  {
    path: 'nurses',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../../Nurses/availablenurses/availablenurses.module').then(
        (m) => m.AvailablenursesPageModule
      ),
  },

  {
    path: 'clinicians',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(
        '../../Clinicians/availableclinician/availableclinician.module'
      ).then((m) => m.AvailableclinicianPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceDetailPageRoutingModule {}
