import { Contact } from 'src/app/models/contact.model'
import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { ContactService } from 'src/app/services/contact.service'
import { lastValueFrom } from 'rxjs'

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  contact!: Contact

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      this.contact = contact || this.contactService.getEmptyContact()
    })
  }

  async onSaveContact() {
    await lastValueFrom(this.contactService.saveContact(this.contact))
    this.contact._id
      ? this.router.navigateByUrl('/contact')
      : this.router.navigate(['contact', this.contact._id])
  }

  onGoBack() {
    this.contact._id
      ? this.router.navigateByUrl(`/contact/${this.contact._id}`)
      : this.router.navigateByUrl(`/contact`)
  }
}
