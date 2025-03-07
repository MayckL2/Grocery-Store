import { Injectable } from '@angular/core';
import { Compra } from './Icompra';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  private carrinho: Compra[] = [];
  // Criando o observable
  private ProdutoAdicionado$ = new BehaviorSubject<number>(0);

  // asObservable transforma o subject em um observable mais potente e mais protegido de modificações esternas
  obterQuantidadeCarrinho(){
    return this.ProdutoAdicionado$
  }

  test(){
    return "disgraça"
  }

  adicionarProduto(produto: string){
    const produtoCompra: Compra = {
      id: this.carrinho.length + 1,
      name: produto
    }

    this.carrinho.push(produtoCompra);
    // Sempre que chamado, ira enviar a quantidade de itens no carrinho para os subscritos
    this.ProdutoAdicionado$.next(this.carrinho.length);
  }
}
