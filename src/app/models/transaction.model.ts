import { TransactionType } from "./transaction-type.enum";

export interface Transaction {
  reason: string;
  type: TransactionType;
  amount: number;
  creationDate: Date;
}
