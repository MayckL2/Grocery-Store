import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ICompra } from '../../models/compra';
import { Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CartItemComponent } from "../../components/cart-item/cart-item.component";

@Component({
  selector: 'app-cart',
  imports: [RouterLink, RouterModule, ButtonModule, CommonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  service = inject(ApiService);
  route = inject(ActivatedRoute);
  products: ICompra[] | undefined;
  

  ngOnInit(): void {
    this.products = this.service.getCart();
    console.log(this.products);  
  }
}
