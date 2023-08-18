import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PatientPageRoutingModule } from './patient-routing.module';

import { PatientPage } from './patient.page';
import { LoginPageModule } from '../login/login/login.module';
import { SignupPageModule } from '../signup/signup/signup.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PatientPageRoutingModule,
    SignupPageModule,
    LoginPageModule,
  ],
  declarations: [PatientPage],
})
export class PatientPageModule {}
