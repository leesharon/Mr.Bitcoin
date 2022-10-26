import { ChartType, Row } from 'angular-google-charts'

export interface Chart {
  title: string
  type: ChartType
  data: Row[]
  options: object
}
