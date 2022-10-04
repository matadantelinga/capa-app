import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import SwiperCore, { Grid, Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { validateEmailPhone } from '../../../utils/form-validators';
// install Swiper modules
SwiperCore.use([Grid, Pagination]);

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('slider ') slider: SwiperComponent;

  inputType = 'password';

  loginForm = this.fb.group({
    email: ['', [Validators.required, validateEmailPhone]],
    password: ['', Validators.required],
  });

  get formControl() {
    return this.loginForm.controls;
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

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  login() {
    if (this.loginForm.valid) {
      this.router.navigateByUrl('home');
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  showPassword() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }

  signup() {
    this.router.navigateByUrl('signup');
  }
}
