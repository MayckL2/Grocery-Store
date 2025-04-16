import { Injectable } from '@angular/core';
import { ICompra } from '../../models/compra';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../models/IProduct';
import stock from '../../../../database/stock.json';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private carrinho: ICompra[] = [];
  // OBSERVABLE
  private ProdutoAdicionado$ = new BehaviorSubject<number>(0);

  // FETCH DATA FROM FAKE API
  fetchApi() {
    return stock;
  }

  // RETURN ALL PRODUCTS
  getAll(){
    return this.fetchApi();
  }

  // RETURN ONE PRODUCT
  getProduct(id: number) {
    let data: IProduct[] = this.fetchApi().products;
    let product: IProduct[] = data.filter((e: IProduct) => e.id == id)

    return product[0];
  }

  getCart(){
    return this.carrinho;
  }

  // RETURN ALL PRODUCT WITH DISCOUNT
  getWithDiscount(){
    let all = this.fetchApi();
    let haveDiscount = all.products.filter(e => e.discount);

    return haveDiscount;
  }

  // RETURN CART QUANTITY
  obterQuantidadeCarrinho() {
    // RETURN OBSERVABLE VALUE
    return this.ProdutoAdicionado$;
  }

  // CALC CART QUANTITY
  calcCartQuantity(itens: ICompra[]){
    let quantity = 0;
    itens.map((e: ICompra) => quantity += e.quantity);
    return quantity;
  }

  // ADD PRODUCT IN CART
  addProduct(produto: IProduct, quantity: number = 1) {
    const produtoCompra: ICompra = {
      id: this.carrinho.length + 1,
      name: produto.name,
      img: produto.image,
      price: produto.price,
      inStock: produto.inStock,
      quantity: quantity
    };

    this.carrinho.push(produtoCompra);
    // SEND THE QUANTITY OF ITENS FOR THE SUBCRIBES
    this.ProdutoAdicionado$.next(this.calcCartQuantity(this.carrinho));
  }
}
