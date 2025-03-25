import { Injectable } from '@angular/core';
import { ICompra } from '../../models/compra';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../models/IProduct';
import data from '../../../../database/data.json';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private products: IProduct[] = [];
  private carrinho: ICompra[] = [];
  // OBSERVABLE
  private ProdutoAdicionado$ = new BehaviorSubject<number>(0);

  // FETCH DATA FROM FAKE API
  fetchApi() {
    return data;
  }

  // RETURN CART QUANTITY
  obterQuantidadeCarrinho() {
    return this.ProdutoAdicionado$;
  }

  // ADD PRODUCT IN CART
  adicionarProduto(produto: IProduct) {
    const produtoCompra: ICompra = {
      id: this.carrinho.length + 1,
      name: produto.name,
      price: produto.price,
      inStock: produto.inStock
    };

    this.carrinho.push(produtoCompra);
    // SEND THE QUANTITY OF ITENS FOR THE SUBCRIBES
    this.ProdutoAdicionado$.next(this.carrinho.length);
  }
}
