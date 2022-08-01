import { TransactionType } from "src/app/models/transaction-type.enum";

export interface TransactionCreateDto {
  bankAccountId: number;
  reason: string;
  type: TransactionType;
  amount: number;
}
