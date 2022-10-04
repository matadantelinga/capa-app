import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  getThumbnail(url) {
    const a = url.match(/https:\/\/(:?www.)?(\w*)/);
    var regEp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
    if (regEp.test(url) === true) {
      var url = url
        .replace(/(>|<)/gi, '')
        .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      if (url[2] !== undefined) {
        var vid = url[2].split(/[^0-9a-z_\-]/i);
        let res = 'https://img.youtube.com/vi/' + vid[0] + '/mqdefault.jpg';
        console.log(res);

        return 'https://img.youtube.com/vi/' + vid[0] + '/mqdefault.jpg';
      } else {
        return 'https://img.youtube.com/vi/' + url + '/mqdefault.jpg';
      }
    }
  }

  getYTvideoID(url) {
    var regEp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
    if (regEp.test(url) === true) {
      var url = url
        .replace(/(>|<)/gi, '')
        .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      if (url[2] !== undefined) {
        var vid = url[2].split(/[^0-9a-z_\-]/i);
        return vid[0];
      } else {
        return url;
      }
    }
  }
}
