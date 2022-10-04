import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoModalComponent } from '../video-modal/video-modal.component';

@Component({
  selector: 'video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent implements OnInit {
  @Input() video;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    if (this.video && this.video.thumbnail === undefined) {
      this.video.thumbnail = 'assets/img-notfound.png';
    }
  }

  async openVideo(url) {
    const modal = await this.modalController.create({
      component: VideoModalComponent,
      componentProps: {
        url: url,
      },
    });
    modal.present();
  }
}
