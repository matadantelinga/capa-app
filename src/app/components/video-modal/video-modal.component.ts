import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from 'src/app/services/shared.services';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss'],
})
export class VideoModalComponent implements OnInit {
  @Input() url: string;
  public embedURL: any;

  constructor(
    private _sanitizer: DomSanitizer,
    private angShared: SharedService
  ) {}

  ngOnInit() {
    this.embedURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' +
        this.angShared.getYTvideoID(this.url) +
        '?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1'
    );
  }
}
