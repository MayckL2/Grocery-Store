import { Component, inject, Input, input, OnInit, TemplateRef } from '@angular/core';
import { IProduct, productDefault } from '../../models/IProduct';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { ProductService } from '../../services/product/product.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  productProp = input<IProduct>(productDefault);
  dataProduct: IProduct = productDefault;
  discountPrice: number | undefined;
  // STORE PERMISSIONS FOR SHOWING SOME COMPONENTS
  conditions = {
    showDiscount: 0,
    showNotAvaliable: false,
    showNotDiscount: true
  }
  service = inject(ApiService);
  productService = inject(ProductService);
  cart = inject(CartService);

  constructor(private router: Router) {}

  // ADJUSTING PRODUCT LINK
  routingProduct(){
    this.router.navigate(['/product', this.productProp()?.id]);
  }

  // ADD ITENS ON CART
  handleAdd(event: Event){
    // STOP FATHER COMPONENT EVENT FROM PROPAGATING
    event.stopPropagation();

    this.cart.addProduct(this.productProp()!);

    console.log(this.cart.getCart().length);
  }

  ngOnInit(): void {
    // AVALIABLE IN STOCK?
    if(this.productProp()?.inStock == 0) this.conditions.showNotAvaliable = true
  
    // HAS DISCOUNT?
    if(this.productProp()?.discount){
      this.conditions.showDiscount = this.productProp()?.discount ?? 0
      this.discountPrice = this.productService.calculatePrice(this.productProp()!.price, this.productProp()?.discount)
    } 

    this.dataProduct = this.productProp();
    // console.log(this.productProp.name, this.conditions)
  }
}
