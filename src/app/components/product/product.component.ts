import { Component, Input, input, OnInit } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  @Input() productProp!: IProduct;
  discountPrice: number | undefined;
  // STORE PERMISSIONS FOR SHOWING SOME COMPONENTS
  conditions = {
    showDiscount: 0,
    showNotAvaliable: false
  }

  // CALCULATE DISCOUNT IN THE PRODUCT
  calculatePrice(){
    this.discountPrice = this.productProp.price - this.productProp.discount
  }

  ngOnInit(): void {
    // AVALIABLE IN STOCK?
    if(this.productProp.inStock == 0) this.conditions.showNotAvaliable = true
  
    // HAS DISCOUNT?
    if(this.productProp.discount){
      this.conditions.showDiscount = this.productProp.discount
      this.calculatePrice()
    } 

    // console.log(this.productProp.name, this.conditions)
  }
}
