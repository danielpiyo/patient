import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientPage } from './patient.page';
import { AuthGuard } from '../shared-resources/guards/auth/auth.guard';
import { ControllerGuard } from '../shared-resources/guards/controller/controller.guard';

const routes: Routes = [
  {
    path: 'patient',
    component: PatientPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../Services/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'reports',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../Report/reports/reports.module').then(
            (m) => m.ReportsPageModule
          ),
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: 'appointments',
        loadChildren: () =>
          import(
            '../appointments/past-appointments/past-appointments.module'
          ).then((m) => m.PastAppointmentsPageModule),
      },
      {
        path: 'pastpayment',
        loadChildren: () =>
          import('../payment/pastpayment/pastpayment.module').then(
            (m) => m.PastpaymentPageModule
          ),
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'signup',
    children: [
      {
        path: '',
        canActivate: [ControllerGuard],
        loadChildren: () =>
          import('../signup/signup/signup.module').then(
            (m) => m.SignupPageModule
          ),
      },
      {
        path: 'onboard',
        loadChildren: () =>
          import('../signup/patient-onboard/patient-onboard.module').then(
            (m) => m.PatientOnboardPageModule
          ),
      },
    ],
  },
  {
    path: 'login',
    canActivate: [ControllerGuard],
    loadChildren: () =>
      import('../login/login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: '',
    redirectTo: '/patient',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PatientPageRoutingModule {}
