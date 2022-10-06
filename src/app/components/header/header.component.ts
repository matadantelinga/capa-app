import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { User } from 'src/app/utils/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user = User;
  constructor(
    private popoverController: PopoverController,
    private router: Router
  ) {}

  ngOnInit() {}

  async openUserMenu(e: Event) {
    const popover = await this.popoverController.create({
      component: UserMenuComponent,
      event: e,
      showBackdrop: false,
    });
    popover.present();
  }

  home() {
    this.router.navigateByUrl('home');
  }
}
