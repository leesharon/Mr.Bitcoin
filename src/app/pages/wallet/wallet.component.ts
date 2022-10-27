import { BitcoinService } from './../../services/bitcoin.service'
import { UserService } from '../../services/user.service'
import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/models/user.model'

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

  async ngOnInit() {
    this.user = this.UserService.getUser()

    this.btcRate = (await this.bitcoinService.getRate()) as number
  }
}
