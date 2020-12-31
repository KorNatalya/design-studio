import { Component } from '@angular/core';

export interface Tile {
  image: string;
  cols: number;
  rows: number;
  header: string;
  text: string;
}

@Component({
  selector: 'app-range-of-services',
  templateUrl: './range-of-services.component.html',
  styleUrls: ['./range-of-services.component.scss'],
})
export class RangeOfServicesComponent {
  tiles: Tile[] = [
    {
      header: 'nihil nostrum',
      text: 'Nulla quae quaerat, quam repellendus reprehenderit vel voluptatem',
      cols: 1,
      rows: 1,
      image: 'star_border',
    },
    {
      header: 'quos sit vero',
      text: 'Explicabo hic iste, sit amet iusto voluptatem necessitatibus',
      cols: 1,
      rows: 1,
      image: 'whatshot',
    },
    {
      header: 'eveniet fuga',
      text: 'Consectetur adipisicing iusto elit. Amet beatae cum eius eos',
      cols: 1,
      rows: 1,
      image: 'tablet_mac',
    },
    {
      header: 'blanditiis',
      text: 'Ipsum dolor sit amet, consectetur adipisicing',
      cols: 1,
      rows: 1,
      image: 'public',
    },
    {
      header: 'animi aspernatur',
      text: 'Explicabo hic iste, iusto maxime necessitatibus',
      cols: 1,
      rows: 1,
      image: 'poll',
    },
    {
      header: 'dolor sit amet',
      text: 'Sciunt nulla quae quaerat, quam reprehenderit vel voluptatem',
      cols: 1,
      rows: 1,
      image: 'pages',
    },
    {
      header: 'consectetur',
      text: 'Adipisicing elit. Amet beatae cum eius eos error expedita',
      cols: 1,
      rows: 1,
      image: 'beach_access',
    },
    {
      header: 'adipisicing elit',
      text: 'Expedita explicabo hic iste, maxime necessitatibus nesciunt',
      cols: 1,
      rows: 1,
      image: 'toys',
    },
  ];

  constructor() {}
}
