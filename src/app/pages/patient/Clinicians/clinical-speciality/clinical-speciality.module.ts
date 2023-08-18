import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicalSpecialityPageRoutingModule } from './clinical-speciality-routing.module';

import { ClinicalSpecialityPage } from './clinical-speciality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicalSpecialityPageRoutingModule,
  ],
  declarations: [ClinicalSpecialityPage],
  exports: [ClinicalSpecialityPage],
})
export class ClinicalSpecialityPageModule {}
