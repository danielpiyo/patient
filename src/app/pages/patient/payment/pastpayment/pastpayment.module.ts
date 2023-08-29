import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastpaymentPageRoutingModule } from './pastpayment-routing.module';

import { PastpaymentPage } from './pastpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastpaymentPageRoutingModule
  ],
  declarations: [PastpaymentPage]
})
export class PastpaymentPageModule {}
