import { Component, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debug } from '../../logger.service';

@Component({
  selector: 'cafeclap-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent {

  apiKey = 'AIzaSyCFjrnR3BsCaFgynaEwrRzN6qD45Ex0AgA';
  videos = [];

  constructor(private http: HttpClient) {
    this.getVideos('PLOKGML2VcXvXpFyjrht1LS0krRmIW4MPU', 4);
  }

  getVideos(id, maxResults) {
    // tslint:disable-next-line: max-line-length
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + id + '&order=date&part=snippet&maxResults=' + maxResults;
    this.http.get(url).toPromise().then((response: any) => {
      for (let item of response.items) {
        item.videoId = item.snippet.resourceId.videoId
      }
      this.videos = response.items;
      debug.log(this.videos);
    })
  }
}
