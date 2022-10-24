import { BitcoinService } from "./../../services/bitcoin.service"
import { Component, OnInit } from "@angular/core"

@Component({
    selector: "statistic",
    templateUrl: "./statistic.component.html",
    styleUrls: ["./statistic.component.scss"],
})
export class StatisticComponent implements OnInit {
    constructor(private bitcoinService: BitcoinService) {}

    ngOnInit(): void {
        this.bitcoinService
            .getMarketPriceHistory()
            .subscribe(response => console.log("response: ", response))
    }
}
