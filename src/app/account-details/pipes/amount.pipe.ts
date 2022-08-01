import { Pipe, PipeTransform } from '@angular/core';
import { TransactionType } from 'src/app/models/transaction-type.enum';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: number, type: TransactionType, symbol?: string): string {
    const s = symbol ? symbol : '';
    if (type === TransactionType.CREDIT)
      return `+${value}${s}`;
    if (type === TransactionType.DEBIT)
      return `-${value}${s}`;
    return '';
  }

}
