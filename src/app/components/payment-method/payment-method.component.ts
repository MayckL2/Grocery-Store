import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tooltip } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { PaymentService } from '../../services/payment/payment.service';
import { IPayment } from '../../models/ipayment';

@Component({
  selector: 'app-payment-method',
  imports: [CommonModule, Tooltip, ButtonModule],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss',
})
export class PaymentMethodComponent {
  buttons = [
    { id: 1, label: IPayment.pix, tip: 'Pay with QrCode' },
    { id: 2, label: IPayment.credit, tip: 'Pay with Credit Card' },
    { id: 3, label: IPayment.debit, tip: 'Pay with Debit Card' },
    { id: 4, label: IPayment.voucher, tip: 'Pay with Food/Meal Voucher' },
    { id: 5, label: IPayment.bankSlip, tip: 'Pay with Bank Slip in app bank or lottery house' },
  ];
  payment = inject(PaymentService);
  nextPayment = output();

  checkButton(label: IPayment) {
    // this.buttons[id].check = !this.buttons[id].check
    // console.log(this.buttons[id].label +" - "+ this.buttons[id].check);
    this.payment.savePaymentMethod(label)
    this.nextPayment.emit()
  }

  filterCheckedButtons() {}
}
