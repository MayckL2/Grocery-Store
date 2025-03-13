import { Component, Input, input } from '@angular/core';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() productProp!: IProduct;
}
