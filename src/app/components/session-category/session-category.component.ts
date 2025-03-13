import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { ProductComponent } from "../product/product.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-category',
  imports: [ProductComponent, CommonModule],
  templateUrl: './session-category.component.html',
  styleUrl: './session-category.component.scss'
})
export class SessionCategoryComponent {
  @Input() products!: IProduct[]
}
