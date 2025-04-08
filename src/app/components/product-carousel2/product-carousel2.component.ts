import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Directive, ElementRef, Inject, Input, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { IProduct } from '../../models/IProduct';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-product-carousel2',
  imports: [ProductComponent, CommonModule],
  templateUrl: './product-carousel2.component.html',
  styleUrl: './product-carousel2.component.scss'
})
export class ProductCarousel2Component {
  @Input() products!: IProduct[]

  private config: SwiperOptions = {
    breakpoints: {
      555: {
        slidesPerView: 2,
      },
      880: {
        slidesPerView: 3,
      },
      1115: {
        slidesPerView: 4,
      },
      1295: {
        slidesPerView: 5,
      }
    },
    spaceBetween: 10,
    navigation: false,
    pagination: { clickable: false },
    scrollbar: { draggable: true },
    // Outras opções de configuração
  };

  // No seu componente
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el: ElementRef) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Inicialize o Swiper aqui
      new Swiper(this.el.nativeElement.querySelector('.swiper-container'), this.config);
    }
  }
}
