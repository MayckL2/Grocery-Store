import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { IProduct } from '../../models/IProduct';
import { ActivatedRoute } from '@angular/router';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { CommonModule, Location, ViewportScroller } from '@angular/common';
import { FormAdressComponent } from '../../components/form-adress/form-adress.component';
import { IAdress } from '../../models/IAdress';
import { PaymentService } from '../../services/payment/payment.service';
import { PaymentMethodComponent } from '../../components/payment-method/payment-method.component';
import { FormConfirmationComponent } from "../../components/form-confirmation/form-confirmation.component";
import { PixPaymentComponent } from "../../components/pix-payment/pix-payment.component";
import { CardPaymentComponent } from "../../components/card-payment/card-payment.component";
import { BankSlipPaymentComponent } from "../../components/bank-slip-payment/bank-slip-payment.component";

@Component({
  selector: 'app-payment',
  imports: [
    ButtonModule,
    StepperModule,
    FormAdressComponent,
    PaymentMethodComponent,
    FormConfirmationComponent,
    CommonModule,
    PixPaymentComponent,
    CardPaymentComponent,
    BankSlipPaymentComponent
],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent{
  service = inject(ApiService);
  route = inject(ActivatedRoute);
  payment = inject(PaymentService);
  productData: IProduct | undefined;
  disableNext = {
    one: true,
    two: true,
    three: true,
    four: true,
  };
  step: number = 1
  viewPort = inject(ViewportScroller);
  method: string = 'pix';

  constructor(private location: Location) {}

  nextStep(){
    this.step ++
    this.viewPort.scrollToPosition([0, this.step * 20]);

    if(this.step == 4) this.renderPayment();
  }

  previousStep(){
    this.step --
    this.viewPort.scrollToPosition([0, 0]);
  }

  renderPayment(){
    this.method = this.payment.getPaymentMethod();
    console.log(this.method);
  }

  back() {
    this.location.back();
  }

  colectAdress(adress: IAdress) {
    if (this.payment.validateAdress(adress) == true) {
      this.disableNext.one = false;
      this.payment.saveAdress(adress);
    }else{
      this.disableNext.one = true
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productData = this.service.getProduct(Number(id));
  }
}
