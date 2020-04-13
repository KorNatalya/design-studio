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
    h2: 'Beatae excepturi, explicabo! Architecto aspernatur dicta ducimus consectetur adipisicing elit.',
    p: 'Walla vitae elit libero'
  }, {
    h2: 'Architecto aspernatur dicta. Dolor porro quaerat sint tempora! Ducimus explicabo facilis.',
    p: 'Nulla vitae elit libero'
  }, {
    h2: 'Dolor esse exercitate voluptatem! Architecto aspernatur dicta cumque debitis dolor eveniet.',
    p: 'Vitae elit libero'
  },
  ];
  public noPause = false;

  constructor() {
  }

}
