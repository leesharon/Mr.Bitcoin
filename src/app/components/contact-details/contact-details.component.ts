import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { Subscription } from "rxjs"
import { Contact } from "src/app/models/contact.model"
import { ContactService } from "src/app/services/contact.service"
import { UserService } from "src/app/services/user.service"

@Component({
    selector: "contact-details",
    templateUrl: "./contact-details.component.html",
    styleUrls: ["./contact-details.component.scss"],
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
    constructor(
        private contactService: ContactService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    contact!: Contact
    paramsSubscription!: Subscription

    async ngOnInit() {
        this.paramsSubscription = this.route.data.subscribe(data => {
            const contact = data["contact"]
            if (contact) this.contact = contact
        })
    }

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe()
    }

    onTransferFunds(amount: number) {
        this.userService.transferFunds({
            amount,
            toId: this.contact._id,
            to: this.contact.name,
            at: Date.now(),
        })
        this.router.navigateByUrl("/contact")
    }

    onRemoveContact(contactId: string) {
        if (contactId) {
            this.contactService.deleteContact(contactId)
            this.router.navigate(["/contact"])
        }
    }

    onEditContact() {
        this.router.navigateByUrl(
            `contact/${this.contact._id}/edit/${this.contact._id}`
        )
    }
}
