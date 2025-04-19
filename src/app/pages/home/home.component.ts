import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { SessionCategoryComponent } from '../../components/session-category/session-category.component';
import { ApiService } from '../../services/api/api.service';
import { IProduct } from '../../models/IProduct';
import { Carousel2Component } from "../../components/carousel2/carousel2.component";
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    SessionCategoryComponent,
    Carousel2Component,
    RouterModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];
  discountProducts: IProduct[] = [];
  // Nova forma de instanciar um service com signal
  observableService = inject(ApiService);

  qtdCarrinho$ = this.observableService.getCartQuanity();
  // Variavel para adiministrar os inscritos no observable
  // subs = new Subscription();

  adicionarProduto(produto: IProduct) {
    this.observableService.addProduct(produto);
    // console.log(this.qtdCarrinho$);
  }

  // Adicionando incrito na variavel
  ngOnInit(): void {
    this.products = this.observableService.getAll().products;
    this.discountProducts = this.observableService.getWithDiscount();

    // const subContador = this.qtdCarrinho$.subscribe((value) => {
    //   console.log('valor emitido:', value);
    // });
  }

  // Desinscrevendo todos os inscritos quando o compronente for destruido
  // ngOnDestroy(): void {
  //   this.subs.unsubscribe();
  //   console.log('Observable destruido');
  // }
}
