import { ContactFilter } from './../../models/contact.model'
import { ContactService } from './../../services/contact.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss'],
})
export class ContactFilterComponent implements OnInit {
  filterBy!: ContactFilter

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.filterBy$.subscribe((filterBy) => {
      this.filterBy = filterBy
    })
  }

  onSetFilter() {
    this.contactService.setFilter(this.filterBy)
  }
}
