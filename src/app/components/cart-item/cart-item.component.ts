import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, inject, input, OnInit, Output } from '@angular/core';
import { Button } from 'primeng/button';
import { ProductService } from '../../services/product/product.service';
import { ApiService } from '../../services/api/api.service';
import { RouterModule } from '@angular/router';
import { BuyDefault, IBuy } from '../../models/IBuy';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe, Button, CommonModule, RouterModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent implements OnInit{
  product = input<IBuy>(BuyDefault);
  data: IBuy = BuyDefault;
  quantity: number = 0;
  productService = inject(ProductService);
  service = inject(ApiService);
  price: number = 0;
  @Output() removeItem: EventEmitter<any> = new EventEmitter()

  handlePrice(){
    this.price = this.productService.calculatePrice(this.product()!.price, this.product()?.discount, this.product()?.quantity);
    console.log(this.product()?.discount);
  }

  addQuantity(){
    if(this.quantity < this.product()!.inStock){
      this.quantity ++
    }
  }

  removeQuantity(){
    if(this.quantity > 1){
      this.quantity --
    }
  }

  removeProduct(){
    this.removeItem.emit()
  }

  constructor() {}

  ngOnInit(): void {
    this.handlePrice();
    this.data = this.product();
  }
}
