import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../models/IProduct';
import { IBuy } from '../../models/IBuy';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IBuy[] = [];
  protected QuantityCart = new BehaviorSubject<number>(0);
  public cart$ = this.QuantityCart.asObservable();
  private purchase: IProduct[] = [];
  private api = inject(ApiService);

  getCart() {
    return this.cart;
  }

  // CALC CART QUANTITY
  calcCartQuantity(itens: IBuy[]) {
    let quantity = 0;
    itens.map((e: IBuy) => (quantity += e.quantity));
    return quantity;
  }

  // ADD PRODUCT IN CART
  addProduct(produto: IProduct, quantity: number = 1) {
    const produtoCompra: IBuy = {
      id: produto.id,
      name: produto.name,
      image: produto.image,
      price: produto.price,
      inStock: produto.inStock,
      quantity: quantity,
      discount: produto.discount ?? 0,
    };

    this.cart.push(produtoCompra);
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
    let items: IBuy[] = [];
    let buy: IBuy | undefined;
    let index: number;

    for (let i = 0; i < this.cart.length; i++) {
      if (items.find((e) => e.id == this.cart[i].id)) {
        index = items.findIndex((e) => e.id == this.cart[i].id);
        buy = items.find((e) => e.id == this.cart[i].id);
        items[index] = {
          ...this.cart[i],
          quantity: this.cart[i].quantity + buy!.quantity,
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
