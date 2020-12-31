import { Component, OnInit } from '@angular/core';

export interface Section {
  number: number;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
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
    },
    {
      number: 645,
      description: 'Happy Clients',
      icon: 'favorite_border',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
