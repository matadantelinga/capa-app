import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dataVideos = [
    {
      title: 'Angular Tutorial for Beginners',
      user: {
        name: 'Programming with Mosh',
        avatar: 'assets/avatar2.png',
      },
      url: 'https://www.youtube.com/watch?v=k5E2AVpwsko',
    },
    {
      title: 'Ionic Tutorial',
      user: {
        name: 'Programming with Mosh',
        avatar: 'assets/avatar2.png',
      },
      url: 'https://www.youtube.com/watch?v=5Gj4Y8zvl-s',
    },
    {
      title: 'Angular Tutorial for Beginners',
      user: {
        name: 'Programming with Mosh',
        avatar: 'assets/avatar2.png',
      },
      url: 'https://www.youtube.com/watch?v=k5E2AVpwsko',
    },
    {
      title: 'Ionic Tutorial',
      user: {
        name: 'Programming with Mosh',
        avatar: 'assets/avatar2.png',
      },
      url: 'https://www.youtube.com/watch?v=5Gj4Y8zvl-s',
    },
  ];

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
      };
      this.videos.push(data);
    });
  }

  getThumbnail(url) {
    this.angShared.getThumbnail(url);
  }
}
