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
  avaliable: boolean = true;
  haveDiscount: number | undefined;

  ngOnInit(): void {
    // AVALIABLE IN STOCK?
    if(this.productProp.inStock == 0) this.avaliable = false
  
    // HAS DISCOUNT?
    if(this.productProp.discount) this.haveDiscount = this.productProp.discount
  }
}
