import { Component, inject, Input, input, OnInit, TemplateRef } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  productProp = input<IProduct>();
  discountPrice: number | undefined;
  // STORE PERMISSIONS FOR SHOWING SOME COMPONENTS
  conditions = {
    showDiscount: 0,
    showNotAvaliable: false,
    showNotDiscount: true
  }
  service = inject(ApiService);

  constructor(private router: Router) {}

  // CALCULATE DISCOUNT IN THE PRODUCT
  calculatePrice(){
    this.discountPrice = this.productProp()!.price - ( this.productProp()!.price * ( this.productProp()!.discount / 100));

    // console.log(`${this.productProp.price} - ${this.productProp.discount}% = ${this.discountPrice}`);
    // console.log("desconto do " + this.productProp.name + "= " + this.productProp.discount / 100);
  }

  // ADJUSTING PRODUCT LINK
  routingProduct(){
    this.router.navigate(['/product', this.productProp()?.id]);
  }

  // ADD ITENS ON CART
  handleAdd(event: Event){
    // STOP FATHER COMPONENT EVENT FROM PROPAGATING
    event.stopPropagation();

    this.service.addProduct(this.productProp()!);

    console.log(this.service.obterQuantidadeCarrinho().value);
  }

  ngOnInit(): void {
    // AVALIABLE IN STOCK?
    if(this.productProp()?.inStock == 0) this.conditions.showNotAvaliable = true
  
    // HAS DISCOUNT?
    if(this.productProp()?.discount){
      this.conditions.showDiscount = this.productProp()!.discount
      this.calculatePrice()
    } 

    // console.log(this.productProp.name, this.conditions)
  }
}
