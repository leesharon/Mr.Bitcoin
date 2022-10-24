import { Injectable } from "@angular/core"

@Injectable({
    providedIn: "root",
})
export class BitcoinService {
    constructor() {}

    // getRate(amountUSD: number) {
    //     try {
    //         const { data } = await axios.get(
    //             `https://blockchain.info/tobtc?currency=USD&value=${amountUSD}`
    //         )
    //         return data
    //     } catch (err) {
    //         console.log(err, "Cannot get rates")
    //     }
    // }

    // getMarketPriceHistory() {
    //     // return marketPriceHistory //!! delete this line on production
    //     try {
    //         const { data } = await axios.get(
    //             "https://api.blockchain.info/charts/market-price?cors=true"
    //         )
    //         return data
    //     } catch (err) {
    //         console.log(err, "Cannot get market price history")
    //     }
    // }

    // getAvgBlockSize() {
    //     return avgBlockSize //!! delete this line on production
    //     try {
    //         const { data } = await axios.get(
    //             `https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`
    //         )
    //         return data
    //     } catch (err) {
    //         console.log(err, "Cannot get average block size")
    //     }
    // }
}
