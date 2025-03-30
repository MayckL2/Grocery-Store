import { Component, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Image } from 'primeng/image';

interface Product {
  name: string,
  price: number
}

@Component({
  selector: 'app-carousel',
  imports: [CarouselModule, Image],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  images = [
    'carousel0.png',
    'carousel1.png',
    'carousel2.png',
    'carousel3.png',
  ]

  ngOnInit() {

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
