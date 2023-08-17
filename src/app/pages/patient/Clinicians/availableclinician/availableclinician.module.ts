import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailableclinicianPageRoutingModule } from './availableclinician-routing.module';

import { AvailableclinicianPage } from './availableclinician.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailableclinicianPageRoutingModule
  ],
  declarations: [AvailableclinicianPage]
})
export class AvailableclinicianPageModule {}
