import {Component, OnInit} from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  img: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  tiles: Tile[] = [
    {cols: 1, rows: 1, img: '../../../../assets/products/1_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/2_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/3_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/4_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/5_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/6_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/7_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/8_small.jpg'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
