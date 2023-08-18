import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NursesSpecialityPageRoutingModule } from './nurses-speciality-routing.module';

import { NursesSpecialityPage } from './nurses-speciality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NursesSpecialityPageRoutingModule,
  ],
  declarations: [NursesSpecialityPage],
  exports: [NursesSpecialityPage],
})
export class NursesSpecialityPageModule {}
