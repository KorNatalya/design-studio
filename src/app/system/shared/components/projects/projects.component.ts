import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  img: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  tiles: Tile[] = [
    {cols: 1, rows: 1, img: '../../../../assets/products/1_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/2_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/3_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/4_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/5_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/6_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/7_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/8_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/4_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/5_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/6_small.jpg'},
    {cols: 1, rows: 1, img: '../../../../assets/products/7_small.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
