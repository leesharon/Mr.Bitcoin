import { lastValueFrom } from "rxjs"
import { BitcoinService } from "./../../services/bitcoin.service"
import { Component, OnInit } from "@angular/core"
import { Chart } from "src/app/models/chart.model"

@Component({
    selector: "statistic",
    templateUrl: "./statistic.component.html",
    styleUrls: ["./statistic.component.scss"],
})
export class StatisticComponent implements OnInit {
    constructor(private bitcoinService: BitcoinService) {}

    // marketPricesHistory: any = {
    //     title: "Market Price History",
    //     type: "Line",
    //     data: [],
    //     options: {
    //         width: 600,
    //         height: 500,
    //         colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"],
    // backgroundColor: "#E4E4E4",
    // is3D: true,
    // chartArea: {
    //     backgroundColor: {
    //         fill: "#F4F4F4",
    //         opacity: 100,
    //     },
    // },
    // backgroundColor: {
    //     fill: "red",
    //     fillOpacity: 0.8,
    // },
    // },
    // }

    async ngOnInit() {}
}
