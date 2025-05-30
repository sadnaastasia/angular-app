import { Component, ViewChild } from '@angular/core';
import { ClientInfo } from './components/clientInfo/clientInfo';
import { Address } from './components/address/address';
import { BankDetails } from './components/bankDetails/bankDetails';
import { TransactionInfo } from './components/transactionInfo/transactionInfo';
import { Documents } from './components/documents/documents';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h1>Заполните форму</h1>
    <form #form="ngForm" (ngSubmit)="onSubmit()">
      <clientInfo></clientInfo>
      <address></address>
      <bankDetails></bankDetails>
      <transactionInfo></transactionInfo>
      <documents></documents>
      <p style="margin-bottom: 2rem">
        Закончите форму, чтобы активировать кнопку отправить
      </p>
      <button
        type="submit"
        class="buttonPositive"
        style="margin-right: 1rem"
        [disabled]="!form.valid"
      >
        Отправить
      </button>
      <button type="reset" class="buttonNegative" (click)="reset()">
        Сбросить
      </button>
    </form>
  `,
  standalone: true,
  imports: [
    ClientInfo,
    Address,
    BankDetails,
    TransactionInfo,
    Documents,
    FormsModule,
    ReactiveFormsModule,
  ],
  styleUrl: './app.css',
})
export class AppComponent {
  @ViewChild('form') form: NgForm;

  reset() {
    this.form.reset();
  }

  onSubmit() {
    console.log('Данные успешно отправлены!');
    console.log(this.form.value);
    this.form.reset();
  }
}
