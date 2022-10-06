import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { User } from 'src/app/utils/data';
import { VideoModalComponent } from '../video-modal/video-modal.component';

@Component({
  selector: 'video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent implements OnInit {
  user = User;
  isSubscribed = false;
  @Input() video;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.video && this.video.thumbnail === undefined) {
      this.video.thumbnail = 'assets/img-notfound.png';
    }
    this.checkUserSubscriptions();
  }

  checkUserSubscriptions() {
    this.user.subscriptions.map((res) => {
      if (res.videoId === this.video.id) {
        this.isSubscribed = true;
      }
    });
  }

  async openVideo(url) {
    if (this.isSubscribed) {
      const modal = await this.modalController.create({
        component: VideoModalComponent,
        componentProps: {
          url: url,
        },
      });
      modal.present();
    } else {
      this.subscribeAlert();
    }
  }

  async subscribeAlert() {
    const alert = await this.alertController.create({
      header: 'Subscribe',
      message: 'You must subscribe to this video to watch',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'btn-line-gray',
          handler: () => {
            this.alertController.dismiss();
          },
        },
        {
          text: 'Subscribe',
          cssClass: 'btn-blue',
          handler: () => {
            this.subscribeVideo();
          },
        },
      ],
      cssClass: 'subscribe-alert',
    });
    alert.present();
  }

  subscribeVideo() {
    this.router.navigateByUrl('payment');
  }
}
