import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router} from '@angular/router';
import { BankAccount } from '../models/bank-account.model';
import { TransactionType } from '../models/transaction-type.enum';
import { BankAccountService } from '../services/bank-account.service';
import { TransactionCreateDto } from '../services/dto/transaction-create.dto';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  bankAccount: BankAccount | null = null;
  TransactionType = TransactionType;
  transactionForm: FormGroup | null = null;

  constructor(
    private bankAccountService: BankAccountService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private form: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.paramMap.get('username');
    if (!username) {
      this.route.navigate(['/']);
      return;
    }

    this.initForm();
    this.fetchDetails(username);
  }

  private initForm() {
    this.transactionForm = this.form.group({
      operation: [null, Validators.required],
      reason: [null, Validators.required],
      amount: [null, Validators.required],
    });
  }

  private fetchDetails(username: string): void {
    this.bankAccountService.getAccount(username)
      .subscribe({
        next: bankAccount => this.bankAccount = bankAccount,
        error: error => {
          this.snackBar.open('Unknown user', undefined, { duration: 2 * 1000 });
          this.route.navigate(['/']);
        }
      });
  }

  public onClick(): void {
    if (!this.transactionForm || !this.bankAccount) return;

    const formValue = this.transactionForm.value;
    const transaction: TransactionCreateDto = {
      amount: formValue.amount,
      reason: formValue.reason,
      type: formValue.operation,
      bankAccountId: this.bankAccount.bankAccountId
    };

    this.bankAccountService.placeTransaction(transaction)
      .subscribe(() => {
        if (!this.bankAccount) return;

        this.fetchDetails(this.bankAccount.username);
        this.transactionForm?.reset();
      });
  }

}
