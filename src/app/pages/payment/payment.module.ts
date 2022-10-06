import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';
import { HeaderComponentModule } from 'src/app/components/header/header.component.module';
import { FormFieldErrorComponentModule } from 'src/app/components/form-field-error/form-field-error.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule,
    HeaderComponentModule,
    ReactiveFormsModule,
    FormFieldErrorComponentModule,
  ],
  declarations: [PaymentPage],
})
export class PaymentPageModule {}
