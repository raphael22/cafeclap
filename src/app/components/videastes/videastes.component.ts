import { Component, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeclap-videastes',
  templateUrl: './videastes.component.html',
  styleUrls: ['./videastes.component.scss']
})
export class VideastesComponent {
  public videastes: Array<any> = [];

  constructor(private http: HttpClient) {
    this.http.get('/assets/json/videastes.json').subscribe(this.onGetVideastes.bind(this), this.onGetVideastesError.bind(this));
  }
  onGetVideastes(response) {
    console.log(response);
    this.videastes = response.videastes;
  }
  onGetVideastesError(error) {
    console.error(error);
  }
}
