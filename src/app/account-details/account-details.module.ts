import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpServiceModule } from '../services/http-service.module';
import { AccountDetailsComponent } from './account-details.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';
import { AmountPipe } from './pipes/amount.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: AccountDetailsComponent },
  { path: ':username', component: AccountDetailsComponent },
];

@NgModule({
  declarations: [
    AccountDetailsComponent,
    TransactionViewComponent,
    AmountPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    HttpServiceModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ]
})
export class AccountDetailsModule { }
