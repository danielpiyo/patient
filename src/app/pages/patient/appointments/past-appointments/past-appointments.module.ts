import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastAppointmentsPageRoutingModule } from './past-appointments-routing.module';

import { PastAppointmentsPage } from './past-appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastAppointmentsPageRoutingModule
  ],
  declarations: [PastAppointmentsPage]
})
export class PastAppointmentsPageModule {}
