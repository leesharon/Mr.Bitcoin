import { BitcoinService } from './../../services/bitcoin.service'
import { Component, Input, OnInit } from '@angular/core'
import { ChartConfiguration, ChartOptions } from 'chart.js'
import { ChartData } from 'src/app/models/chart-data.model'

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor() {}

  title = 'ng2-charts-demo'

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Market Price History',
        fill: false,
        tension: 0,
        borderColor: '#1499FA',
        backgroundColor: '#1499FA',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
      },
    ],
  }
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  }
  public lineChartLegend = true

  @Input() chartHeight!: number
  @Input() data!: ChartData

  async ngOnInit() {
    this.lineChartData.labels = this.data.labels
    this.lineChartData.datasets[0].data = this.data.values
    this.lineChartData.datasets[0].label = this.data.mainTitle
    this.lineChartData.datasets[0].borderColor = this.data.mainColor
    this.lineChartData.datasets[0].backgroundColor = this.data.mainColor
  }
}
