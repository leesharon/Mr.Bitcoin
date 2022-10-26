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

  async ngOnInit(): Promise<void> {
    const zibi = await lastValueFrom(
      this.bitcoinService.getMarketPriceHistory()
    )
    console.log(`zibi:`, zibi)
    // if (zibi) console.log(`zibi.values:`, zibi.values)
  }
}
