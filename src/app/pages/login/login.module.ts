import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormFieldErrorComponentModule } from 'src/app/components/form-field-error/form-field-error.component.module';
import { SwiperModule } from 'swiper/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    SwiperModule,
    FormFieldErrorComponentModule,
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
