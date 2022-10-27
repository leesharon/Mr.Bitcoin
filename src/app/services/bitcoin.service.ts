import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { lastValueFrom, map, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  public async getRate() {
    try {
      const apiUrl = `https://blockchain.info/tobtc?currency=USD&value=1`
      const data = this.http.get(apiUrl).pipe()
      const dataPrm = await lastValueFrom(data)
      return dataPrm
    } catch (err) {
      throw new Error('Cannot get bitcoin rate')
    }
  }

  public async getMarketPriceHistory(): Promise<{}> {
    try {
      const apiUrl = `https://api.blockchain.info/charts/market-price?timespan=1years&format=json&cors=true`
      const data: Observable<{ date: string; val: number }[]> = this.http
        .get(apiUrl)
        .pipe(
          map((res) =>
            (res as { values: [] }).values.map((val) => {
              const newDate = new Date((val as { x: number }).x * 1000)
              const dateToDisplay = new Intl.DateTimeFormat('en-UK').format(
                newDate
              )
              return {
                date: dateToDisplay,
                val: (val as { y: number }).y,
              }
            })
          )
        )
      let labels: string[] = []
      let values: number[] = []
      const dataPrm = await lastValueFrom(data)
      dataPrm.forEach((x) => {
        labels.push(x.date)
        values.push(x.val)
      })
      return { labels, values }
    } catch (err) {
      throw new Error('Cannot get market price history')
    }
  }

  // public shouldAdoptPet() {
  //     return this.http
  //         .get<{ answer: string }>("https://yesno.wtf/api")
  //         .pipe(map(res => res.answer))
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
  //     return avgBlockSize
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
