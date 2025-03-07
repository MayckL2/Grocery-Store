import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ObservableService } from '../../services/observable/observable.service';

@Component({
  selector: 'app-observables',
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent implements OnInit, OnDestroy{
  // Nova forma de instanciar um service com signal
  observableService = inject(ObservableService);

  qtdCarrinho$ = this.observableService.obterQuantidadeCarrinho();
  // Variavel para adiministrar os inscritos no observable
  subs = new Subscription();

  adicionarProduto(produto: string){
    this.observableService.adicionarProduto(produto);
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
