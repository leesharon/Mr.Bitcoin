import { Injectable } from "@angular/core"
import { Transaction } from "../models/transaction.model"
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
                username: "Guest",
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
        this.storageService.saveToStorage("user", this.user)
        sessionStorage.setItem("loggedinUser", JSON.stringify(this.user))
        return this.user
    }

    transferFunds(transaction: Transaction) {
        const loggedinUser = this.getUser()
        loggedinUser.transactions.push(transaction)
        loggedinUser.balance -= transaction.amount
        this.saveUser(loggedinUser)
        sessionStorage.setItem("loggedinUser", JSON.stringify(loggedinUser))
    }

    saveUser(user: User) {
        this.storageService.saveToStorage("user", this.user)
        sessionStorage.setItem("loggedinUser", JSON.stringify(this.user))
    }
}
