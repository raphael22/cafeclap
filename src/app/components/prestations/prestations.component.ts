import { Component, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IPrestations {
  name: string;
  description: string;
  icon?: string
}

@Component({
  selector: 'cafeclap-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss']
})
export class PrestationsComponent {
  public prestations: Array<any> = [];

  constructor(private http: HttpClient) {
    this.http.get('/assets/json/prestations.json').subscribe(this.onGetPrestations.bind(this), this.onGetPrestationsError.bind(this));
  }
  onGetPrestations({ prestations }: { prestations: IPrestations[] }) {
    console.log(prestations);
    for (const prestation of prestations) {
      prestation.icon = prestation.name;
      prestation.name = prestation.name.charAt(0).toUpperCase() + prestation.name.substr(1, prestation.name.length);
    }
    this.prestations = prestations;
  }
  onGetPrestationsError(error) {
    console.error(error);
  }
}
