import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Image } from 'primeng/image';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-carousel2',
  imports: [Image],
  templateUrl: './carousel2.component.html',
  styleUrl: './carousel2.component.scss',
})
export class Carousel2Component implements OnInit {
  private config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
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
      new Swiper(this.el.nativeElement.querySelector('.swiper'), this.config);
    }
  }
}
