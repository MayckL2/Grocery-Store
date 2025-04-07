import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  service = inject(ApiService);
  route = inject(ActivatedRoute);
  productData: IProduct | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    // console.log(this.service.getProduct(Number(id)));  
    this.productData = this.service.getProduct(Number(id))
  }
}
