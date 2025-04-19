import { Injectable } from '@angular/core';
import { IBuy } from '../../models/IBuy';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../models/IProduct';
import stock from '../../../../database/stock.json';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private carrinho: IBuy[] = [];
  // OBSERVABLE
  protected ProdutoAdicionado$ = new BehaviorSubject<number>(this.carrinho.length);
  private purchase: IProduct[] = []

  // FETCH DATA FROM FAKE API
  fetchApi() {
    return stock;
  }

  // RETURN ALL PRODUCTS
  getAll() {
    return this.fetchApi();
  }

  // RETURN ONE PRODUCT
  getProduct(id: number) {
    let data: IProduct[] = this.fetchApi().products;
    let product: IProduct[] = data.filter((e: IProduct) => e.id == id);

    return product[0];
  }

  getCart() {
    return this.carrinho;
  }

  // RETURN ALL PRODUCT WITH DISCOUNT
  getWithDiscount() {
    let all = this.fetchApi();
    let haveDiscount = all.products.filter((e) => e.discount);

    return haveDiscount;
  }

  // RETURN CART QUANTITY
  getCartQuanity() {
    // RETURN OBSERVABLE VALUE
    return this.ProdutoAdicionado$;
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

    this.carrinho.push(produtoCompra);
    // SEND THE QUANTITY OF ITENS FOR THE SUBCRIBES
    this.ProdutoAdicionado$.next(this.calcCartQuantity(this.carrinho));
  }

  // REMOVE PRODUCT FROM CART
  removeProduct(id: number, quantity: number = 1) {
    let newCart = this.carrinho.filter((e) => e.id !== id);
    this.carrinho = newCart;
    console.log(this.carrinho);

    // SEND THE QUANTITY OF ITENS FOR THE SUBCRIBES
    this.ProdutoAdicionado$.next(this.calcCartQuantity(this.carrinho));
  }

  // CONCAT SAME ITENS AND SOME QUANTITY
  ConcatItemsQuantity() {
    let items: IBuy[] = [];
    let buy: IBuy | undefined;
    let index: number
    
    for (let i = 0; i < this.carrinho.length; i++) {
      if(items.find(e => e.id == this.carrinho[i].id)){
        index = items.findIndex(e => e.id == this.carrinho[i].id)
        buy = items.find(e => e.id == this.carrinho[i].id)
        items[index] = {...this.carrinho[i], quantity: this.carrinho[i].quantity + buy!.quantity}
      }else{
        items.push(this.carrinho[i])
      }
    }
    return items;
  }

  // ADD ITEMS IN PURCHASE
  addPurchase(id: number){
    let item = this.getProduct(id);
    this.purchase.push(item);
    return this.purchase
  }
}
