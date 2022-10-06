import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.services';
import { DataVideos } from 'src/app/utils/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dataVideos = DataVideos;

  videos = [];
  constructor(private angShared: SharedService) {}

  ngOnInit() {
    this.getVideo();
  }

  getVideo() {
    this.dataVideos.map((video) => {
      let data = {
        title: video.title,
        user: {
          name: video.user.name,
          avatar: video.user.avatar,
        },
        url: video.url,
        thumbnail: this.getThumbnail(video.url),
        id: video.videoId,
      };
      this.videos.push(data);
    });
  }

  getThumbnail(url) {
    this.angShared.getThumbnail(url);
  }
}
