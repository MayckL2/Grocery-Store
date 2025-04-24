import { AsyncPipe, CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MatIconModule } from '@angular/material/icon';
import {
  Options
} from './category/category/category.component';
import { Product } from '../productCarousel/product-carousel.component';
import { IProduct } from '../../models/IProduct';
import { ApiService } from '../../services/api/api.service';
import { BadgeModule } from 'primeng/badge';
import { FloatLabelModule } from "primeng/floatlabel"
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  imports: [
    InputTextModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    BadgeModule,
    AsyncPipe,
    FloatLabelModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, AfterViewInit {
  imageLogo = '/assets/FreshcartLogo.png';

  products: IProduct[] = [];
  observableService = inject(ApiService);
  cart = inject(CartService);

  // OPTIONS CATEGORY
  fruits: Options[] | undefined = [{ name: 'fruits', destination: '#' }];
  dairy: Options[] | undefined = [{ name: 'dairy', destination: '#' }];
  drinks: Options[] | undefined = [{ name: 'drinks', destination: '#' }];
  snacks: Options[] | undefined = [{ name: 'snacks', destination: '#' }];

  // CART QUANTITY
  cartQtt$ = this.cart.cart$;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.products = this.observableService.fetchApi().products;
    // console.log(this.products.filter(e => e.category == "fruits" ? console.log(e) : console.log("not fruit")));
  
    // let test
    // test = this.products.filter(e => {e.category == "fruits" ? return e : undefined});
    
    // console.log(test)
  }

  checkCategory(name: string, arr: Product[]){
    
  } 

  ngAfterViewInit() {
    this.cartQtt$ = this.observableService.getCartQuanity();
    this.cd.detectChanges(); // Força uma verificação manual
  }
}
