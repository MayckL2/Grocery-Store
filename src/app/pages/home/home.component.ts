import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { SessionCategoryComponent } from '../../components/session-category/session-category.component';
import { ApiService } from '../../services/api/api.service';
import { IProduct } from '../../models/IProduct';
import { Carousel2Component } from "../../components/carousel2/carousel2.component";
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { OptionsCategoryComponent } from "../../components/options-category/options-category.component";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    SessionCategoryComponent,
    Carousel2Component,
    RouterModule,
    OptionsCategoryComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];
  discountProducts: IProduct[] = [];
  // Nova forma de instanciar um service com signal
  observableService = inject(ApiService);
  cart = inject(CartService);

  qtdCarrinho$ = this.cart.cart$;

  adicionarProduto(produto: IProduct) {
    this.cart.addProduct(produto);
    // console.log(this.qtdCarrinho$);
  }

  // Adicionando incrito na variavel
  ngOnInit(): void {
    this.products = this.observableService.getAll();
    this.discountProducts = this.observableService.getWithDiscount();
  }
}
