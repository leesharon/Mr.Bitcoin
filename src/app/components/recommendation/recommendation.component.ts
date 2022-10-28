import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
})
export class RecommendationComponent implements OnInit {
  constructor() {}

  recommendations = [
    {
      name: 'Kady Baker',
      imgSrc: './assets/img/avatar-kady.jpg',
      txt: ' “The best and most efficient BTC wallet out there.”',
    },
    {
      name: 'Aiysha Reese',
      imgSrc: './assets/img/avatar-aiysha.jpg',
      txt: ' “Probably the best product in this market so far”',
    },
    {
      name: 'Arthur Clarke',
      imgSrc: './assets/img/avatar-arthur.jpg',
      txt: ' “Amazing. I feel my funds are absolutely secure.”',
    },
  ]

  ngOnInit(): void {}
}
