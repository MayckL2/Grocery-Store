import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { IProduct } from '../../models/IProduct';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-details',
  imports: [RouterLink, RouterModule, ButtonModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  service = inject(ApiService);
  route = inject(ActivatedRoute);
  productData: IProduct | undefined;
  quantity: number = 0
  delivery: number = 0

  addQuantity(){
    if(this.quantity < this.productData!.inStock){
      this.quantity ++
    }
  }

  removeQuantity(){
    if(this.quantity > 0){
      this.quantity --
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productData = this.service.getProduct(Number(id))
    console.log(this.productData);  

    // DEFINING DELIVERY TIME
    this.delivery = 2
  }
}
