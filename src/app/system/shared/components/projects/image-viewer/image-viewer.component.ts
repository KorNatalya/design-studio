import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface ImageViewData {
  img: string;
}

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ImageViewerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ImageViewData
  ) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
