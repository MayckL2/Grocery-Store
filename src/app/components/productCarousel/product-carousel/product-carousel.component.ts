import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ProductComponent } from "../../product/product.component";

export interface Product {
  name: string,
  price: number
}

@Component({
  selector: 'app-product-carousel',
  imports: [CarouselModule, ProductComponent],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.scss',
})
export class ProductCarouselComponent {
  @Input() products: Product[] = [];
  carouselProducts: Product[] = [];
  responsiveOptions: any[] | undefined;

  filterProducts() {
    this.carouselProducts = this.products;
    // console.log(this.carouselProducts)
  }

  ngOnInit() {
    this.filterProducts();
    // console.log(this.products);

    this.responsiveOptions = [
      {
        breakpoint: '100000px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '1450px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '1250px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '1050px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '660px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
