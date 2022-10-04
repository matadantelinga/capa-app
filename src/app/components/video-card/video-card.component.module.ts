import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { VideoCardComponent } from './video-card.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [VideoCardComponent],
  exports: [VideoCardComponent],
})
export class VideoCardComponentModule {}
