import { Component, inject, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ProductComponent } from "../../components/product/product.component";
import { SessionCategoryComponent } from "../../components/session-category/session-category.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SessionCategoryComponent, HeaderComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  api = inject(APIService);
  apiData: any

  // constructor(private api: APIService){}
  
  ngOnInit(): void {
    this.api.getAll().subscribe(value => {
      this.apiData = value
      // console.log(value)
    });
  }
}
