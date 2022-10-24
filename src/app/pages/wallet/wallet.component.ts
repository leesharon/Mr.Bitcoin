import { UserService } from "../../services/user.service"
import { Component, OnInit } from "@angular/core"
import { User } from "src/app/models/user.model"

@Component({
    selector: "wallet",
    templateUrl: "./wallet.component.html",
    styleUrls: ["./wallet.component.scss"],
})
export class WalletComponent implements OnInit {
    constructor(private UserService: UserService) {}

    user!: User

    ngOnInit(): void {
        this.user = this.UserService.getUser()
    }
}
