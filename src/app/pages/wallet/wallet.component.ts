import { UserService } from "../../services/user.service"
import { Component, OnInit } from "@angular/core"
import { User } from "src/app/models/user.model"
import { ChartData } from "src/app/models/chart-data.model"
import { BitcoinService } from "src/app/services/bitcoin.service"

@Component({
    selector: "wallet",
    templateUrl: "./wallet.component.html",
    styleUrls: ["./wallet.component.scss"],
})
export class WalletComponent implements OnInit {
    constructor(
        private UserService: UserService,
        private bitcoinService: BitcoinService
    ) {}

    user!: User
    marketPricesHistory!: ChartData

    async ngOnInit() {
        this.user = this.UserService.getUser()
        this.marketPricesHistory =
            (await this.bitcoinService.getMarketPriceHistory()) as ChartData
    }
}
