import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { validateEmailPhone } from 'src/app/utils/form-validators';
import SwiperCore, { Grid, Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Grid, Pagination]);

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild('slider ') slider: SwiperComponent;

  inputType = 'password';

  registerForm = this.fb.group({
    email: ['', [Validators.required, validateEmailPhone]],
    password: ['', Validators.required],
  });

  get formControl() {
    return this.registerForm.controls;
  }

  slides = [
    {
      image: 'assets/loginslide.png',
      title: 'Smart subscription',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab',
    },
    {
      image: 'assets/loginslide.png',
      title: 'AI automation',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab',
    },
  ];

  public slideOpts: SwiperOptions = {
    slidesPerView: 1,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: false,
    spaceBetween: 0,
    observer: true,
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async signup() {
    if (this.registerForm.valid) {
      const toast = await this.toastController.create({
        header: 'Success',
        message: 'Registration succeed!',
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
      this.router.navigateByUrl('login');
    } else {
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
      this.registerForm.markAllAsTouched();
    }
  }

  login() {
    this.router.navigateByUrl('login');
  }
}
