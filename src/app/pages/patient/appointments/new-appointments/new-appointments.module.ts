import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAppointmentsPageRoutingModule } from './new-appointments-routing.module';

import { NewAppointmentsPage } from './new-appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewAppointmentsPageRoutingModule,
  ],
  declarations: [NewAppointmentsPage],
})
export class NewAppointmentsPageModule {}
