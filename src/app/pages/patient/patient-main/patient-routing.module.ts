import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientPage } from './patient.page';
import { AuthGuard } from '../shared-resources/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'patient',
    component: PatientPage,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Services/home/home.module').then(
                (m) => m.HomePageModule
              ),
          },
          {
            path: 'service/:serviceId',
            canActivate: [AuthGuard],
            children: [
              {
                path: '',
                loadChildren: () =>
                  import(
                    '../Services/service-detail/service-detail.module'
                  ).then((m) => m.ServiceDetailPageModule),
              },
              {
                path: 'nurses',
                canActivate: [AuthGuard],
                children: [
                  {
                    path: '',
                    loadChildren: () =>
                      import(
                        '../Nurses/availablenurses/availablenurses.module'
                      ).then((m) => m.AvailablenursesPageModule),
                  },
                  {
                    path: 'nurse/:nurseId',
                    loadChildren: () =>
                      import('../Nurses/nurse-detail/nurse-detail.module').then(
                        (m) => m.NurseDetailPageModule
                      ),
                  },
                ],
              },
              {
                path: 'clinicians',
                canActivate: [AuthGuard],
                children: [
                  {
                    path: '',
                    loadChildren: () =>
                      import(
                        '../Clinicians/availableclinician/availableclinician.module'
                      ).then((m) => m.AvailableclinicianPageModule),
                  },
                  {
                    path: 'clinician/:clinicianId',
                    loadChildren: () =>
                      import(
                        '../Clinicians/clinician-detail/clinician-detail.module'
                      ).then((m) => m.ClinicianDetailPageModule),
                  },
                ],
              },
            ],
          },
        ],
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
