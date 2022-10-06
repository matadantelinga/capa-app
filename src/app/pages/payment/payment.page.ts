import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  paymentForm = this.fb.group({
    name: ['', [Validators.required]],
    bankName: ['', Validators.required],
    cardNumber: ['', Validators.required],
  });

  get formControl() {
    return this.paymentForm.controls;
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastController: ToastController,
    private _location: Location
  ) {}

  ngOnInit() {}

  subscribe() {
    if (this.paymentForm.valid) {
      this.showSuccess();
    } else {
      this.showFailed();
    }
  }

  async showSuccess() {
    const toast = await this.toastController.create({
      header: 'Success',
      message: 'Subscription succeed!',
      color: 'primary',
      duration: 3000,
      buttons: [
        {
          icon: 'close',
          role: 'cancel',
        },
      ],
    });

    toast.present();
    this.router.navigateByUrl('home');
  }

  async showFailed() {
    const toast = await this.toastController.create({
      header: 'Failed',
      message: 'Please fill in the form input!',
      color: 'danger',
      duration: 3000,
      buttons: [
        {
          icon: 'close',
          role: 'cancel',
        },
      ],
    });

    toast.present();
  }

  cancel() {
    this._location.back();
  }
}
