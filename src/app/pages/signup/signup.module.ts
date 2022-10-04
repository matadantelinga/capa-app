import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormFieldErrorComponentModule } from 'src/app/components/form-field-error/form-field-error.component.module';
import { SwiperModule } from 'swiper/angular';
import { SignupPageRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ReactiveFormsModule,
    SwiperModule,
    FormFieldErrorComponentModule,
  ],
  declarations: [SignupPage],
})
export class SignupPageModule {}
