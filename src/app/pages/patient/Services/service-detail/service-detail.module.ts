import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDetailPageRoutingModule } from './service-detail-routing.module';

import { ServiceDetailPage } from './service-detail.page';
import { NursesSpecialityPageModule } from '../../Nurses/nurses-speciality/nurses-speciality.module';
import { ClinicalSpecialityPageModule } from '../../Clinicians/clinical-speciality/clinical-speciality.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // NursesSpecialityPageModule,
    // ClinicalSpecialityPageModule,
    ServiceDetailPageRoutingModule,
  ],
  declarations: [ServiceDetailPage],
})
export class ServiceDetailPageModule {}
