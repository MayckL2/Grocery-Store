import { Component, ElementRef, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ICategory } from '../../models/ICategory';
import { isPlatformBrowser } from '@angular/common';
import { Swiper } from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'div[app-options-category]',
  imports: [],
  templateUrl: './options-category.component.html',
  styleUrl: './options-category.component.scss',
  host: {
    class: 'md:px-20 px-8 py-6'
  }
})
export class OptionsCategoryComponent implements OnInit {
  api = inject(ApiService);
  options: ICategory[] = [];

  private config: SwiperOptions = {
    breakpoints: {
      555: {
        slidesPerView: 2,
      },
      880: {
        slidesPerView: 4,
      },
      1115: {
        slidesPerView: 5,
      },
      1295: {
        slidesPerView: 6,
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
    this.options = this.api.getCategories();
    if (isPlatformBrowser(this.platformId)) {
      // Inicialize o Swiper aqui
      new Swiper(this.el.nativeElement.querySelector('.swiper-container'), this.config);
    }
  }
}
