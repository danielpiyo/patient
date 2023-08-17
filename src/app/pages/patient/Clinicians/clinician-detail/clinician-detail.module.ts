import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicianDetailPageRoutingModule } from './clinician-detail-routing.module';

import { ClinicianDetailPage } from './clinician-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicianDetailPageRoutingModule
  ],
  declarations: [ClinicianDetailPage]
})
export class ClinicianDetailPageModule {}
