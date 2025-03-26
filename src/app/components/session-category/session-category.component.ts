import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { ProductComponent } from "../product/product.component";
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-session-category',
  imports: [ProductComponent, CommonModule, MatDividerModule],
  templateUrl: './session-category.component.html',
  styleUrl: './session-category.component.scss'
})
export class SessionCategoryComponent implements OnInit {
  @Input() products!: IProduct[]
  @Input() text!: string
  @Input() greenText?: string

  ngOnInit(): void {
    // console.log(this.products)
  }
}
