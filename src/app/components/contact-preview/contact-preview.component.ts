import { Contact } from 'src/app/models/contact.model'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact!: Contact
  constructor() {}

  ngOnInit(): void {}
}
