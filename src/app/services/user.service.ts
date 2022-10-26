import { Injectable } from '@angular/core'
import { Transaction } from '../models/transaction.model'
import { User } from '../models/user.model'
import { StorageService } from './storage.service'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private storageService: StorageService) {}

  private user!: User

  getUser(): User {
    return (
      JSON.parse(sessionStorage.getItem('loggedinUser')!) || {
        username: 'Guest',
        balance: 50,
        transactions: [
          {
            amount: 5,
            toId: '5a566402abce24c6bfe4699d',
            to: 'Dominique Soto',
            at: 1666795387188,
          },
          {
            amount: 12,
            toId: '5a56640298ab77236845b82b',
            to: 'Glenna Santana',
            at: 1666795395175,
          },
          {
            amount: 14,
            toId: '5a5664025f6ae9aa24a99fde',
            to: 'Hallie Mclean',
            at: 1666795451054,
          },
          {
            amount: 20,
            toId: '5a5664025f6ae9aa24a99fde',
            to: 'Parsons Norris',
            at: 1666795462923,
          },
        ],
      }
    )
  }

  isLoggedIn(): boolean {
    return this.getUser() ? true : false
  }

  signup(username: string) {
    this.user = {
      username,
      balance: 50,
      transactions: [
        {
          amount: 5,
          toId: '5a566402abce24c6bfe4699d',
          to: 'Dominique Soto',
          at: 1666795387188,
        },
        {
          amount: 12,
          toId: '5a56640298ab77236845b82b',
          to: 'Glenna Santana',
          at: 1666795395175,
        },
        {
          amount: 14,
          toId: '5a5664025f6ae9aa24a99fde',
          to: 'Hallie Mclean',
          at: 1666795451054,
        },
        {
          amount: 20,
          toId: '5a5664025f6ae9aa24a99fde',
          to: 'Parsons Norris',
          at: 1666795462923,
        },
      ],
    }
    this.storageService.saveToStorage('user', this.user)
    sessionStorage.setItem('loggedinUser', JSON.stringify(this.user))
    return this.user
  }

  transferFunds(transaction: Transaction) {
    const loggedinUser = this.getUser()
    loggedinUser.transactions.push(transaction)
    loggedinUser.balance -= transaction.amount
    this.saveUser(loggedinUser)
    sessionStorage.setItem('loggedinUser', JSON.stringify(loggedinUser))
  }

  saveUser(user: User) {
    this.storageService.saveToStorage('user', this.user)
    sessionStorage.setItem('loggedinUser', JSON.stringify(this.user))
  }
}
