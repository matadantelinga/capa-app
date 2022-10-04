import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HeaderComponentModule } from 'src/app/components/header/header.component.module';
import { HomePageRoutingModule } from './home-routing.module';
import { VideoCardComponentModule } from 'src/app/components/video-card/video-card.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderComponentModule,
    VideoCardComponentModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
