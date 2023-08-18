import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/patient/patient-main/patient.module').then(
        (m) => m.PatientPageModule
      ),
  },
  {
    path: 'nurses-speciality',
    loadChildren: () =>
      import(
        './pages/patient/Nurses/nurses-speciality/nurses-speciality.module'
      ).then((m) => m.NursesSpecialityPageModule),
  },
  {
    path: 'clinical-speciality',
    loadChildren: () =>
      import(
        './pages/patient/Clinicians/clinical-speciality/clinical-speciality.module'
      ).then((m) => m.ClinicalSpecialityPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
