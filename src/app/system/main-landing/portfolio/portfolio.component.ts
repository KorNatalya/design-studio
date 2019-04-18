import {Component, OnInit} from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  img: any;
}

export interface Section {
  number: number;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  tiles: Tile[] = [
    {cols: 1, rows: 1, img: '../../../../assets/products/1.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/2.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/3.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/4.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/5.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/6.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/7.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/8.jpg'},
  ];

  folders: Section[] = [
    {
      number: 547,
      description: 'Projects Completed',
      icon: 'assignment_turned_in',
    },
    {
      number: 2410,
      description: 'Working Hours',
      icon: 'alarm',
    },
    {
      number: 490,
      description: 'Positive Feedback',
      icon: 'grade',
    }
    ,
    {
      number: 645,
      description: 'Happy Clients',
      icon: 'favorite_border',
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
