import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailablenursesPage } from './availablenurses.page';

const routes: Routes = [
  {
    path: '',
    component: AvailablenursesPage,
  },
  {
    path: 'nurse/:nurseId',
    loadChildren: () =>
      import('../../Nurses/nurse-detail/nurse-detail.module').then(
        (m) => m.NurseDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailablenursesPageRoutingModule {}
