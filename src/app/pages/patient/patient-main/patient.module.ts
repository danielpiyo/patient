import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PatientPageRoutingModule } from './patient-routing.module';

import { PatientPage } from './patient.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, PatientPageRoutingModule],
  declarations: [PatientPage],
})
export class PatientPageModule {}
