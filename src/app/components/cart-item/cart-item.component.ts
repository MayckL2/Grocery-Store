import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, inject, input, OnInit, Output } from '@angular/core';
import { ICompra } from '../../models/compra';
import { Button } from 'primeng/button';
import { ProductService } from '../../services/product/product.service';
import { ApiService } from '../../services/api/api.service';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe, Button, Tag, CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent implements OnInit{
  product = input<ICompra>();
  quantity: number = 0;
  productService = inject(ProductService);
  service = inject(ApiService);
  price: number = 0;
  @Output() removeItem: EventEmitter<any> = new EventEmitter()

  handlePrice(){
    this.price = this.productService.calculatePrice(this.product()!.price, this.product()?.discount);
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
    // this.service.removeProduct(this.product()!.id)
    this.removeItem.emit()
  }

  constructor() {}

  ngOnInit(): void {
    this.handlePrice();
  }
}
