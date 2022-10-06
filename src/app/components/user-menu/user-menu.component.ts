import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  constructor(
    private router: Router,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
  }

  signout() {
    this.close();
    this.router.navigateByUrl('login');
  }

  seeProfile() {
    this.close();
    this.router.navigateByUrl('profile');
  }
}
