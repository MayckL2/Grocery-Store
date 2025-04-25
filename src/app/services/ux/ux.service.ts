import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UxService {
  private viewPort = inject(ViewportScroller);

  constructor() { }

  scrollToTop() {
    this.viewPort.scrollToPosition([0, 0]);
  }
}
