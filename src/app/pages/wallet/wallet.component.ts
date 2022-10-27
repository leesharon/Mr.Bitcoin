import { UserService } from '../../services/user.service'
import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/models/user.model'
import { BitcoinService } from 'src/app/services/bitcoin.service'
import { ChartData } from 'src/app/models/chart-data.model'

@Component({
  selector: 'wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  constructor(
    private UserService: UserService,
    private bitcoinService: BitcoinService
  ) {}

  user!: User
  btcRate!: number
  marketPricesHistory!: ChartData

  async ngOnInit() {
    this.user = this.UserService.getUser()
    this.btcRate = (await this.bitcoinService.getRate()) as number
    this.marketPricesHistory =
      (await this.bitcoinService.getMarketPriceHistory()) as ChartData
  }
}
