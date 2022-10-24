import { Component, OnInit } from "@angular/core"
import { UserService } from "src/app/services/user.service"

@Component({
    selector: "app-header",
    templateUrl: "./app-header.component.html",
    styleUrls: ["./app-header.component.scss"],
})
export class AppHeaderComponent implements OnInit {
    constructor(private userService: UserService) {}

    loggedinUser = this.userService.getUser()

    ngOnInit(): void {}
}
