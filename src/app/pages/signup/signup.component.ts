import { Router } from "@angular/router"
import { Component, OnInit } from "@angular/core"
import { UserService } from "src/app/services/user.service"

@Component({
    selector: "signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
    constructor(private userService: UserService, private router: Router) {}

    ngOnInit(): void {}

    signup(username: string) {
        this.userService.signup(username)
        this.router.navigateByUrl("/wallet")
    }
}
