import { Component, Input, OnInit } from '@angular/core'
import { Transaction } from 'src/app/models/transaction.model'

@Component({
  selector: 'transactio-preview',
  templateUrl: './transactio-preview.component.html',
  styleUrls: ['./transactio-preview.component.scss'],
})
export class TransactioPreviewComponent implements OnInit {
  constructor() {}

  @Input() transaction!: Transaction
  @Input() btcRate!: number

  ngOnInit(): void {}
}
