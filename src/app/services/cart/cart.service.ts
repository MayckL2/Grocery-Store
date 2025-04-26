import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct, productDefault } from '../../models/IProduct';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = [];
  protected QuantityCart = new BehaviorSubject<number>(0);
  public cart$ = this.QuantityCart.asObservable();
  private purchase: IProduct[] = [];
  private api = inject(ApiService);

  getCart() {
    return this.cart;
  }

  // CALC CART QUANTITY
  calcCartQuantity(itens: IProduct[]) {
    let quantity = 0;
    itens.map((e: IProduct) => (quantity += e.quantity ?? 0));
    return quantity;
  }

  // ADD PRODUCT IN CART
  addProduct(product: IProduct, quantity: number = 1) {
    const productBuy: IProduct = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      inStock: product.inStock,
      quantity: quantity,
      discount: product.discount ?? 0,
      category: product.category
    };

    this.cart.push(productBuy);
    // SEND THE QUANTITY OF ITENS FOR THE SUBCRIBES
    this.QuantityCart.next(this.calcCartQuantity(this.cart));
  }

  // REMOVE PRODUCT FROM CART
  removeProduct(id: number, quantity: number = 1) {
    let newCart = this.cart.filter((e) => e.id !== id);
    this.cart = newCart;
    console.log(this.cart);

    // SEND THE QUANTITY OF ITENS FOR THE SUBCRIBES
    this.QuantityCart.next(this.calcCartQuantity(this.cart));
  }

  // CONCAT SAME ITENS AND SOME QUANTITY
  ConcatItemsQuantity() {
    let items: IProduct[] = [];
    let buy: IProduct | undefined;
    let index: number;

    for (let i = 0; i < this.cart.length; i++) {
      if (items.find((e) => e.id == this.cart[i].id)) {
        index = items.findIndex((e) => e.id == this.cart[i].id);
        buy = items.find((e) => e.id == this.cart[i].id);
        items[index] = {
          ...this.cart[i],
          quantity: this.cart[i].quantity ?? 0 + ( buy ? buy.quantity ?? 0 : 0 )
        };
      } else {
        items.push(this.cart[i]);
      }
    }
    return items;
  }

  // ADD ITEMS IN PURCHASE
  addPurchase(id: number) {
    let item = this.api.getProduct(id);
    this.purchase.push(item);
    return this.purchase;
  }
}
