import { Component } from '@angular/core';

export interface Clients {
  picture: string;
  alt: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  logotypeAddress = '../../../assets/logotypes/';

  clients: Clients[] = [
    {
      picture: this.logotypeAddress + '1.jpg',
      alt: 'Wild & Free'
    },
    {
      picture: this.logotypeAddress + '2.jpg',
      alt: 'Atlantic Ocean'
    },
    {
      picture: this.logotypeAddress + '3.jpg',
      alt: 'The Black Fox'
    },
    {
      picture: this.logotypeAddress + '4.jpg',
      alt: 'Native'
    },
  ];

  constructor() { }
}
