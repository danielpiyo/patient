import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientPage } from './patient.page';

const routes: Routes = [
  {
    path: 'patient',
    component: PatientPage,
    children: [
      {
        path: 'home',
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
        loadChildren: () =>
          import('../Report/reports/reports.module').then(
            (m) => m.ReportsPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: '',
        redirectTo: '/patient/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/patient/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PatientPageRoutingModule {}
