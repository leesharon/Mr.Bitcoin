import { Observable } from 'rxjs'
import { ContactService } from './../../services/contact.service'
import { Component, OnInit } from '@angular/core'
import { Contact } from 'src/app/models/contact.model'

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  contacts$!: Observable<Contact[]>

  ngOnInit(): void {
    this.contactService.query()
    this.contacts$ = this.contactService.contacts$
  }
}
