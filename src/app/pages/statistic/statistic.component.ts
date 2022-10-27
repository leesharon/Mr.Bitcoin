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

    boxesData: {}[] = [
        {
            symbol: "$",
            title: "Total BTC",
            amount: 100,
        },
        {
            symbol: "$",
            title: "Total USD",
            amount: 100,
        },
        {
            symbol: "$",
            title: "Total BTC",
            amount: 100,
        },
    ]

    marketPricesHistory!: ChartData
    avgBlockSize!: ChartData

    async ngOnInit() {
        this.marketPricesHistory =
            (await this.bitcoinService.getMarketPriceHistory()) as ChartData
        this.avgBlockSize =
            (await this.bitcoinService.getAvgBlockSize()) as ChartData
    }
}
