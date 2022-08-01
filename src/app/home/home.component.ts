import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { ConnectionType } from '../models/connection-type.enum';
import { BankAccountService } from '../services/bank-account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public ConnectionType = ConnectionType;
  public defaultConnectionType = ConnectionType.CREATE;

  public usernameControl = new FormControl('', Validators.required);

  constructor(
    private bankAccountService: BankAccountService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  public onToggleTypeChange(event: MatButtonToggleChange): void {
    this.defaultConnectionType = event.value;
  }

  public onSubmit(): void {
    const username = this.usernameControl.value;
    if (!username) return;

    switch (this.defaultConnectionType) {
      case ConnectionType.CREATE: return this.handleCreate(username);
      case ConnectionType.LOGIN: return this.handleConnect(username);
    }
  }

  private handleCreate(username: string): void {
    this.bankAccountService.createBankAccount(username)
      .subscribe(() => this.route.navigate(["account-details", username]));
  }

  private handleConnect(username: string): void {
    this.route.navigate(["account-details", username]);
  }

}
