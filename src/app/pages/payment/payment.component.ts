import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { IProduct } from '../../models/IProduct';
import { ActivatedRoute } from '@angular/router';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { Location } from '@angular/common';
import { FormAdressComponent } from "../../components/form-adress/form-adress.component";
import { IAdress } from '../../models/IAdress';
import { PaymentService } from '../../services/payment/payment.service';

@Component({
  selector: 'app-payment',
  imports: [ButtonModule, StepperModule, FormAdressComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  service = inject(ApiService);
  route = inject(ActivatedRoute);
  payment = inject(PaymentService);
  productData: IProduct | undefined;
  disableNext = {
    one: true,
    two: true,
    three: true,
    four: true
  };

  constructor(private location: Location) { }

  back(){
    this.location.back();
  }

  colectAdress(adress: IAdress){
    console.log(this.payment.validateAdress(adress));
    if(this.payment.validateAdress(adress) == true){
      this.disableNext.one = false;
      this.payment.saveAdress(adress);
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productData = this.service.getProduct(Number(id));
    console.log(this.productData);
  }
}
