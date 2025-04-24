import { Component, inject, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment/payment.service';
import { IProduct } from '../../models/IProduct';
import { Message } from 'primeng/message';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IAdress } from '../../models/IAdress';
import { IPayment } from '../../models/ipayment';
import { IBuy } from '../../models/IBuy';

@Component({
  selector: 'app-form-confirmation',
  imports: [Message, CurrencyPipe, CommonModule],
  templateUrl: './form-confirmation.component.html',
  styleUrl: './form-confirmation.component.scss'
})
export class FormConfirmationComponent implements OnInit {
  payment = inject(PaymentService);
  products: IProduct[] | undefined
  adress: IAdress | undefined
  paymentMethod: string | undefined
  total = {
    products: 0,
    delivery: 0,
    discount: 0,
    total: 0
  }

  ngOnInit(): void {
    this.products = this.payment.getProduct();
    this.adress = this.payment.getAdress();
    this.paymentMethod = this.payment.getPaymentMethod();
    
    if(this.products){
      console.log(this.products)

      this.total.delivery = this.payment.calcDelivery(this.products);
      this.total.products = this.payment.calcProducts(this.products);
      this.total.discount = this.payment.calcDiscount(this.products);
      this.total.total = this.payment.calcTotal(this.products);
    }
  }
}
