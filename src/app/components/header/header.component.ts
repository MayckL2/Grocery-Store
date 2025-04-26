import { AsyncPipe, CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
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
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    InputTextModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    BadgeModule,
    FloatLabelModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
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
  // cartQtt$ = this.cart.cart$;
  cartQtt$: number = 0;
  subs = new Subscription();

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subs.add(
      this.cart.cart$.subscribe(data => {
        this.cartQtt$ = data;
      })
    )
  }

  checkCategory(name: string, arr: Product[]){
    
  } 

  ngAfterViewInit() {
    this.cd.detectChanges(); // Força uma verificação manual
  }

  ngOnDestroy(): void {
    // Importante: Limpar todas as subscriptions
    this.subs.unsubscribe();
  }
}
