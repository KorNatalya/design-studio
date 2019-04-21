import {Component} from '@angular/core';

export interface Slide {
  h2: string;
  p: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  public items: Slide[] = [{
    h2: 'Dolor esse exercitationem voluptatem! Architecto aspernatur dicta ducimus explicabo facilis.',
    p: 'Walla vitae elit libero'
  }, {
    h2: 'Architecto aspernatur dicta. Dolor esse exercitationem voluptatem! Ducimus explicabo facilis.',
    p: 'Nulla vitae elit libero'
  }, {
    h2: 'Dolor esse exercitationem voluptatem! Architecto aspernatur dicta ducimus explicabo facilis.',
    p: 'Vitae elit libero'
  },
  ];
  public noPause = false;

  constructor() {
  }

}
