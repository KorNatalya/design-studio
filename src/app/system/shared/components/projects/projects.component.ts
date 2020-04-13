import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ImageViewerComponent} from './image-viewer/image-viewer.component';


export interface Tile {
  cols: number;
  rows: number;
  id: number;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private readonly imgUrl = '../../../../assets/products/';
  tiles: Tile[] = [
    {cols: 1, rows: 1, id: 1},
    {cols: 1, rows: 1, id: 2},
    {cols: 1, rows: 1, id: 3},
    {cols: 1, rows: 1, id: 4},
    {cols: 1, rows: 1, id: 5},
    {cols: 1, rows: 1, id: 6},
    {cols: 1, rows: 1, id: 7},
    {cols: 1, rows: 1, id: 8},
    {cols: 1, rows: 1, id: 9},
    {cols: 1, rows: 1, id: 10},
    {cols: 1, rows: 1, id: 11},
    {cols: 1, rows: 1, id: 12},
  ];

  private getSmallImage(id: number) {
    return this.imgUrl + id + '_small.jpg';
  }

  constructor(public dialog: MatDialog) {
  }

  openModal(id: number): void {
    this.dialog.open(ImageViewerComponent, {
      data: {img: this.getLargeImage(id)}
    });
  }

  ngOnInit() {
  }

  private getLargeImage(id: number) {
    return this.imgUrl + id + '.jpg';
  }
}
