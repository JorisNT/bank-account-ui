import { Transaction } from "src/app/models/transaction.model";

export interface BankAccountDto {
  bankAccountId: number;
  username: string;
  balance: number;
  creationDate: string;
  transactions: Transaction[];
}
