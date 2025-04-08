import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarousel2Component } from './product-carousel2.component';

describe('ProductCarousel2Component', () => {
  let component: ProductCarousel2Component;
  let fixture: ComponentFixture<ProductCarousel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCarousel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCarousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
