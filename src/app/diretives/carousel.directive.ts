import { Directive, ElementRef, Input } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective {
  @Input() config: SwiperOptions = {};
  private swiper: Swiper | undefined;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.swiper) {
      this.swiper.destroy();
    }
    this.swiper = new Swiper(this.el.nativeElement, this.config);
  }

  ngOnDestroy() {
    this.swiper?.destroy();
  }
}
