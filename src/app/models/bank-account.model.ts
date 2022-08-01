import { Transaction } from "./transaction.model";

export interface BankAccount {
  bankAccountId: number;
  username: string;
  balance: number;
  creationDate: Date;
  transactions: Transaction[];
}
