import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NurseDetailPageRoutingModule } from './nurse-detail-routing.module';

import { NurseDetailPage } from './nurse-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NurseDetailPageRoutingModule
  ],
  declarations: [NurseDetailPage]
})
export class NurseDetailPageModule {}
