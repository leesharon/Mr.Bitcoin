import { Component, OnInit } from "@angular/core"
import { ChartData } from "src/app/models/chart-data.model"
import { BitcoinService } from "src/app/services/bitcoin.service"

@Component({
    selector: "statistic",
    templateUrl: "./statistic.component.html",
    styleUrls: ["./statistic.component.scss"],
})
export class StatisticComponent implements OnInit {
    constructor(private bitcoinService: BitcoinService) {}

    marketPricesHistory!: ChartData
    avgBlockSize!: ChartData

    async ngOnInit() {
        this.marketPricesHistory =
            (await this.bitcoinService.getMarketPriceHistory()) as ChartData
        this.avgBlockSize =
            (await this.bitcoinService.getAvgBlockSize()) as ChartData
    }
}
