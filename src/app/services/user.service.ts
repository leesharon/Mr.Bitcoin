import { Injectable } from "@angular/core"
import { User } from "../models/user.model"
import { StorageService } from "./storage.service"

@Injectable({
    providedIn: "root",
})
export class UserService {
    constructor(private storageService: StorageService) {}

    private user!: User

    getUser(): User {
        return (
            JSON.parse(sessionStorage.getItem("loggedinUser")!) || {
                name: "Guest",
                balance: 50,
                transactions: [],
            }
        )
    }

    signup(username: string) {
        this.user = {
            username,
            balance: 50,
            transactions: [],
        }
        this.storageService.saveToStorage("users", this.user)
        sessionStorage.setItem("loggedinUser", JSON.stringify(this.user))
        return this.user
    }
}
