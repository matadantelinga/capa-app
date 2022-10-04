import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [HeaderComponent, UserMenuComponent],
  exports: [HeaderComponent],
})
export class HeaderComponentModule {}
