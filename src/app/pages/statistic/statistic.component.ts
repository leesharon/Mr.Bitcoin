import { lastValueFrom } from 'rxjs'
import { BitcoinService } from './../../services/bitcoin.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) {}

  marketPricesHistory: any = {
    title: 'Market Price History',
    type: 'Line',
    data: [],
    options: {
      width: 600,
      height: 500,
    },
  }

  async ngOnInit(): Promise<void> {
    this.marketPricesHistory.data = await lastValueFrom(
      this.bitcoinService.getMarketPriceHistory()
    )
  }
}
