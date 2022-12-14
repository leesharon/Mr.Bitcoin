import { Contact } from 'src/app/models/contact.model'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  @Input() contacts!: Contact[]
  constructor() {}

  ngOnInit(): void {}
}
