import { Component, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

interface Product {
  name: string,
  price: number
}

@Component({
  selector: 'app-carousel',
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() products: Product[] = [];
  carouselProducts: Product[] = [];
  responsiveOptions: any[] | undefined;

  filterProducts(){
    this.carouselProducts = this.products;
    // console.log(this.carouselProducts)
  }

  ngOnInit() {
    this.filterProducts();

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
