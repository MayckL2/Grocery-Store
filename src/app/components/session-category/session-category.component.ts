import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { ProductCarousel2Component } from "../product-carousel2/product-carousel2.component";

@Component({
  selector: 'app-session-category',
  imports: [CommonModule, MatDividerModule, ProductCarousel2Component],
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
