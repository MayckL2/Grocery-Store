import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected categories: string[] = [

  ]
  constructor() { }

  calculatePrice(price: number, discount: number = 0, quantity: number = 1){
    let finalValue = (price - ( price * ( discount / 100))) * quantity;
    return finalValue;
  }
}
