import { Component, OnInit } from "@angular/core"
import { Contact } from "src/app/models/contact.model"

@Component({
    selector: "contact-details",
    templateUrl: "./contact-details.component.html",
    styleUrls: ["./contact-details.component.scss"],
})
export class ContactDetailsComponent implements OnInit {
    constructor() {}

    contact: Contact = {
        _id: "5a56640269f443a5d64b32ca",
        name: "Ochoa Hyde",
        email: "ochoahyde@renovize.com",
        phone: "+1 (968) 593-3824",
    }

    ngOnInit(): void {}

    onSubmit() {
        console.log(": submit transfer")
    }
}
