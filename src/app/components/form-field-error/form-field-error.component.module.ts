import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormFieldErrorComponent } from './form-field-error.component';

@NgModule({
  declarations: [FormFieldErrorComponent],
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormFieldErrorComponent],
})
export class FormFieldErrorComponentModule {}
