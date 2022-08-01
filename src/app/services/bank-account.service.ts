import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BankAccount } from '../models/bank-account.model';
import { Transaction } from '../models/transaction.model';
import { BankAccountDto } from './dto/bank-account.dto';
import { TransactionCreateDto } from './dto/transaction-create.dto';

@Injectable()
export class BankAccountService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "/api/account";
   }

  public createBankAccount(username: string) {
    const targetUrl = this.baseUrl + "/create";
    return this.http.post(targetUrl, { username });
  }

  public getAccount(username: string) {
    const targetUrl = this.baseUrl + `/${username}`;
    return this.http.get<BankAccountDto>(targetUrl).pipe(map(bankAccountToModel))
  }

  public placeTransaction(transaction: TransactionCreateDto) {
    const targetUrl = this.baseUrl + "/transaction";
    return this.http.post<Transaction>(targetUrl, transaction);
  }
}

function bankAccountToModel(dto: BankAccountDto) {
  return {
    bankAccountId: dto.bankAccountId,
    balance: dto.balance,
    transactions: dto.transactions,
    username: dto.username,
    creationDate: new Date(dto.creationDate)
  } as BankAccount;
}
