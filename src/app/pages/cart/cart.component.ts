import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { BuyDefault, IBuy } from '../../models/IBuy';
import { Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CartItemComponent } from "../../components/cart-item/cart-item.component";
import { ProductService } from '../../services/product/product.service';
import { SectionNavigationComponent } from "../../components/section-navigation/section-navigation.component";

interface ICart{
  name: string,
  price: number,
  quantity: number
}

@Component({
  selector: 'app-cart',
  imports: [RouterModule, ButtonModule, CommonModule, CartItemComponent, Tag, SectionNavigationComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  service = inject(ApiService);
  productService = inject(ProductService);
  route = inject(ActivatedRoute);
  products: IBuy[] = [BuyDefault];
  deliveryValue: number = 0;
  total: number= 0;
  prices: ICart[] = [];

  // CALCULATE DELIVERY VALUE
  calcDelivery(){
    this.deliveryValue = this.service.getCart().length;
  }

  // CALCULATE TOTAL VALUE
  calcTotal(){
    let items = 0;
    // this.products?.map(e => items += this.productService.calculatePrice(e.price, e.discount));
    this.products?.map(e => items += this.productService.calculatePrice(e.price, e.discount, e.quantity));
    // console.log(this.productService.calculatePrice(20, 50));
    this.total = items + this.deliveryValue;
  }

  // HANDLE PRICE WITH DISCONT
  handlePrice(products: IBuy[]){
    this.prices = []
    products.map(e => {
      this.prices.push({
        name: e.name,
        price: this.productService.calculatePrice(e.price, e.discount, e.quantity),
        quantity: e.quantity
      })      
    })
    // console.log(this.prices);
  }

  remove(id: number){
    this.service.removeProduct(id);
    this.processCart();
    console.log("removed item " + id);
  }

  // PROCESS CART ITENS
  processCart(){
    // this.products = this.service.getCart()
    this.products = this.service.ConcatItemsQuantity()
    this.handlePrice(this.products)
    this.calcDelivery();
    this.calcTotal();
    // console.log(this.products);
    console.log(this.service.ConcatItemsQuantity())
  }
  
  ngOnInit(): void {
    this.processCart();
  }
}
