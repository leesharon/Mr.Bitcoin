import { Transaction } from "./transaction.model"

export interface User {
    username: string
    balance: number
    transactions: Transaction[]
}
