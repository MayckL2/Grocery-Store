import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  calculatePrice(price: number, discount: number = 0, quantity: number = 0){
    let finalValue = price - ( price * ( discount / 100)) * quantity;
    return finalValue;
  }
}
