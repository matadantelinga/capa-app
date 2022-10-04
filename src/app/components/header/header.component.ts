import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  async openUserMenu(e: Event) {
    const popover = await this.popoverController.create({
      component: UserMenuComponent,
      event: e,
      showBackdrop: false,
    });
    popover.present();
  }
}
