import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpaymentPageRoutingModule } from './newpayment-routing.module';

import { NewpaymentPage } from './newpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewpaymentPageRoutingModule,
  ],
  declarations: [NewpaymentPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewpaymentPageModule {}
