import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { lastValueFrom, map, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  public getMarketPriceHistory(): Observable<unknown> {
    try {
      const apiUrl = `https://api.blockchain.info/charts/market-price?timespan=1years&format=json&cors=true`
      return this.http.get(apiUrl).pipe(
        map((res) => {
          ;(res as { values: [] }).values
        })
      )
    } catch (err) {
      console.log(err, 'Cannot get rates')
      throw new Error()
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
