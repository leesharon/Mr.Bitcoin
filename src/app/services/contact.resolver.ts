import { ContactService } from './contact.service'
import { Contact } from 'src/app/models/contact.model'
import { inject, Injectable } from '@angular/core'
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ContactResolver implements Resolve<Observable<void | Contact>> {
  contactService = inject(ContactService)

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id']
    return this.contactService.getContactById(id)
  }
}
