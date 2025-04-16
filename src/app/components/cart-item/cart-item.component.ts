import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ICompra } from '../../models/compra';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe, Button],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  product = input<ICompra>();
  quantity: number = 0;

  constructor() {}
}
