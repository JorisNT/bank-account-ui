import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BankAccountService } from "./bank-account.service";

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [BankAccountService]
})
export class HttpServiceModule { }
