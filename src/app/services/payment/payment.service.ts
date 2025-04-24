import { inject, Injectable } from '@angular/core';
import { IAdress } from '../../models/IAdress';
import { Subject } from 'rxjs';
import { IPayment } from '../../models/ipayment';
import { ProductService } from '../product/product.service';
import { IProduct } from '../../models/IProduct';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  protected dataAdress: IAdress | undefined;
  protected paymentMethod: IPayment | undefined;
  protected products: IProduct[] = [];
  productService = inject(ProductService);
  api = inject(ApiService);

  constructor() {}

  saveProduct(product: IProduct) {
    this.products.push(product);
    console.log(product);
  }

  getProduct(): IProduct[] | undefined {
    return this.products ? this.products : undefined;
  }

  saveAdress(adress: IAdress) {
    this.dataAdress = adress;
    return 'Adress save!';
  }

  getAdress() {
    return this.dataAdress;
  }

  validateAdress(adress: IAdress): string | boolean {
    if (!adress.cep) {
      return 'CEP is necessary...';
    }
    if (!adress.state) {
      return 'State is necessary...';
    }
    if (!adress.neighborhood) {
      return 'Neighborhood is necessary...';
    }
    if (!adress.street) {
      return 'Street is necessary...';
    }
    if (!adress.number) {
      return 'Number is necessary...';
    }
    if (!adress.complement) {
      return 'Complement is necessary...';
    }
    if (!adress.receiver) {
      return 'Receiver is necessary...';
    }

    return true;
  }

  savePaymentMethod(method: IPayment) {
    this.paymentMethod = method;
    console.log(this.paymentMethod)
  }

  getPaymentMethod(): IPayment | string {
    let method: IPayment = this.paymentMethod!;
    switch (method) {
      case IPayment.pix:
        return 'pix'
        break;
      case IPayment.debit:
        return 'debit'
        break;
      case IPayment.credit:
        return 'credit'
        break;
      case IPayment.voucher:
        return 'voucher'
        break;
      case IPayment.bankSlip:
        return 'bankSlip'
        break;
      default:
        return 'qualquer bosta'  
        break;
    }
  }

  calcTotal(products: IProduct[]){
    let items = (this.calcProducts(products) + this.calcDelivery(products)) - this.calcDiscount(products);
    return items;
  }

  calcProducts(products: IProduct[]){
    let items = 0;
    products.map(e => items += e.price);
    return items;
  }

  calcDiscount(products: IProduct[]){
    let items = 0;
    products.map(e => items += e.price * ( e.discount / 100) * (e.quantity ?? 1));
    return items;
  }

  calcDelivery(products: IProduct[]){
    let items = 0;
    products?.map(e => items += 1); // to implement
    return items;
  }
}
