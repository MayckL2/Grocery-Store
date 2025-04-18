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

  getCategories(){
    this.categories = [
      "Fruits & Vegetables",
      "Dairy & Breakfast",
      "Egg, Meat & Fish",
      "Bath & Body",
      "Cold drinks & Juices",
      "Snacks and Munchies",
      "Ice Delights"
    ]
    return this.categories;
  }
}
