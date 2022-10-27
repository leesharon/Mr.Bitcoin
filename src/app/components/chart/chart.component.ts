import { BitcoinService } from "./../../services/bitcoin.service"
import { Component, Input, OnInit } from "@angular/core"
import { ChartConfiguration, ChartOptions } from "chart.js"
import { lastValueFrom } from "rxjs"

@Component({
    selector: "chart",
    templateUrl: "./chart.component.html",
    styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
    constructor(private bitcoinService: BitcoinService) {}

    title = "ng2-charts-demo"

    public lineChartData: ChartConfiguration<"line">["data"] = {
        labels: [],
        datasets: [
            {
                data: [],
                label: "Market Price History",
                fill: false,
                tension: 0,
                borderColor: "#1499FA",
                backgroundColor: "#1499FA",
                pointBackgroundColor: "transparent",
                pointBorderColor: "transparent",
            },
        ],
    }
    public lineChartOptions: ChartOptions<"line"> = {
        responsive: true,
    }
    public lineChartLegend = true

    @Input() chartHeight!: number

    async ngOnInit() {
        const marketPricesHistory =
            (await this.bitcoinService.getMarketPriceHistory()) as {
                labels: string[]
                values: number[]
            }
        this.lineChartData.labels = marketPricesHistory.labels
        this.lineChartData.datasets[0].data = marketPricesHistory.values
        console.log("this.marketPriceHistory: ", marketPricesHistory)
    }
}
