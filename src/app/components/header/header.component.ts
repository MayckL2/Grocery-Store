import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { MatIconModule } from '@angular/material/icon';
import {
  CategoryComponent,
  Options,
} from './category/category/category.component';
import { Product } from '../productCarousel/product-carousel/product-carousel.component';
import { IProduct } from '../../models/IProduct';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-header',
  imports: [
    InputTextModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    CategoryComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  imageLogo = '/assets/FreshcartLogo.png';

  products: IProduct[] = [];
  observableService = inject(ApiService);

  fruits: Options[] | undefined = [{ name: 'fruits', destination: '#' }];
  dairy: Options[] | undefined = [{ name: 'dairy', destination: '#' }];
  drinks: Options[] | undefined = [{ name: 'drinks', destination: '#' }];
  snacks: Options[] | undefined = [{ name: 'snacks', destination: '#' }];

  // Adicionando incrito na variavel
  ngOnInit(): void {
    this.products = this.observableService.fetchApi().products;
    // console.log(this.products.filter(e => e.category == "fruits" ? console.log(e) : console.log("not fruit")));
  
    // let test
    // test = this.products.filter(e => {e.category == "fruits" ? return e : undefined});
    
    // console.log(test)
  }

  checkCategory(name: string, arr: Product[]){
    
  } 
}
