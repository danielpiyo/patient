import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AuthGuard } from '../../shared-resources/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'skeleton',
    loadChildren: () =>
      import('../../Services/home/skeleton/skeleton.module').then(
        (m) => m.SkeletonPageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../profile/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: 'prescriptions',
    loadChildren: () =>
      import('../../profile/prescriptions/prescriptions.module').then(
        (m) => m.PrescriptionsPageModule
      ),
  },

  {
    path: 'service/:serviceId',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../../Services/service-detail/service-detail.module').then(
        (m) => m.ServiceDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
