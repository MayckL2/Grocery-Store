import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { ProductService } from '../../services/product/product.service';
import { SectionNavigationComponent } from '../../components/section-navigation/section-navigation.component';
import { CartService } from '../../services/cart/cart.service';
import { UxService } from '../../services/ux/ux.service';
import { PaymentService } from '../../services/payment/payment.service';
import { IProduct, productDefault } from '../../models/IProduct';
import { Message } from 'primeng/message';

interface ICart {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  imports: [
    RouterModule,
    ButtonModule,
    CommonModule,
    CartItemComponent,
    Tag,
    SectionNavigationComponent,
    Message
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  service = inject(ApiService);
  productService = inject(ProductService);
  payment = inject(PaymentService);
  route = inject(ActivatedRoute);
  products: IProduct[] = [productDefault];
  deliveryValue: number = 0;
  total: number = 0;
  prices: ICart[] = [];
  cart = inject(CartService);
  ux = inject(UxService);

  // CALCULATE DELIVERY VALUE
  calcDelivery() {
    this.deliveryValue = this.cart.getCart().length;
  }

  // CALCULATE TOTAL VALUE
  calcTotal() {
    let items = 0;
    // this.products?.map(e => items += this.productService.calculatePrice(e.price, e.discount));
    this.products?.map(
      (e) =>
        (items += this.productService.calculatePrice(
          e.price,
          e.discount,
          e.quantity
        ))
    );
    // console.log(this.productService.calculatePrice(20, 50));
    this.total = items + this.deliveryValue;
  }

  // HANDLE PRICE WITH DISCONT
  handlePrice(products: IProduct[]) {
    this.prices = [];
    products.map((e) => {
      this.prices.push({
        name: e.name,
        price: this.productService.calculatePrice(
          e.price,
          e.discount,
          e.quantity
        ),
        quantity: e.quantity ?? 1,
      });
    });
    // console.log(this.prices);
  }

  remove(id: number) {
    this.cart.removeProduct(id);
    this.processCart();
    console.log('removed item ' + id);
  }

  // PROCESS CART ITENS
  processCart() {
    // this.products = this.service.getCart()
    this.products = this.cart.ConcatItemsQuantity();
    this.handlePrice(this.products);
    this.calcDelivery();
    this.calcTotal();
    // console.log(this.products);
    console.log(this.cart.ConcatItemsQuantity());
  }

  handleBuy() {
    this.payment.saveProduct(this.products);
  }

  ngOnInit(): void {
    this.ux.scrollToTop();
    this.processCart();
  }
}
