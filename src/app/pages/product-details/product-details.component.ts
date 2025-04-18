import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { IProduct } from '../../models/IProduct';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Tag } from 'primeng/tag';
import { Dialog } from 'primeng/dialog';
import { SectionNavigationComponent } from "../../components/section-navigation/section-navigation.component";

@Component({
  standalone: true,
  selector: 'app-product-details',
  imports: [RouterLink, RouterModule, ButtonModule, CommonModule, Tag, Dialog, SectionNavigationComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  service = inject(ApiService);
  route = inject(ActivatedRoute);
  productData: IProduct | undefined;
  quantity: number = 1
  delivery: string = "now"
  visibleDialog: boolean = false;
  inStock: boolean = true;

  addQuantity(){
    if(this.quantity < this.productData!.inStock){
      this.quantity ++
    }
  }

  removeQuantity(){
    if(this.quantity > 1){
      this.quantity --
    }
  }

  handleCart(){
    this.service.addProduct(this.productData!, this.quantity);
    this.visibleDialog = true
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productData = this.service.getProduct(Number(id))
    console.log(this.productData);  

    this.inStock = this.productData.inStock ? true : false 

    // DEFINING DELIVERY TIME
    // TO BE CALCULETED BY DISTANCE
    this.delivery = `${ 2 } hours`
  }
}
