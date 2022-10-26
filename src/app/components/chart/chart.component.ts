import { Component, Input, OnInit } from '@angular/core'
import { Chart } from 'src/app/models/chart.model'

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() chart!: Chart
  constructor() {}

  ngOnInit(): void {}
}
