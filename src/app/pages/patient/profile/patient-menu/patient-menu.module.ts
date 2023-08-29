import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientMenuPageRoutingModule } from './patient-menu-routing.module';

import { PatientMenuPage } from './patient-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientMenuPageRoutingModule,
  ],
  declarations: [PatientMenuPage],
  exports: [PatientMenuPage],
})
export class PatientMenuPageModule {}
