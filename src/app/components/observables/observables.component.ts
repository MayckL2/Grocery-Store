import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-observables',
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent implements OnInit, OnDestroy{
  // Nova forma de instanciar um service com signal
  observableService = inject(ApiService);

  qtdCarrinho$ = this.observableService.obterQuantidadeCarrinho();
  // Variavel para adiministrar os inscritos no observable
  subs = new Subscription();

  adicionarProduto(produto: IProduct){
    this.observableService.addProduct(produto);
    console.log(this.qtdCarrinho$);
  }
 
  // Adicionando incrito na variavel
  ngOnInit(): void {
    const subContador = this.qtdCarrinho$.subscribe(value => {
      console.log("valor emitido:", value);
    })

    this.subs.add(subContador);
  }

  // Desinscrevendo todos os inscritos quando o compronente for destruido
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    console.log('Observable destruido');
  }

}
