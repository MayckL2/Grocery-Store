import { Component, OnInit } from '@angular/core';
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
  products: Product[] = [
    {name: "arroz", price: 5},
    {name: "feijão", price: 6},
    {name: "cafe", price: 10},
    {name: "arroz", price: 5},
    {name: "feijão", price: 6},
    {name: "cafe", price: 10},
    {name: "arroz", price: 5},
    {name: "feijão", price: 6},
    {name: "cafe", price: 10}
  ]

  responsiveOptions: any[] | undefined;


  ngOnInit() {

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
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
