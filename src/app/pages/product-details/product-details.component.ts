import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { IProduct } from '../../models/IProduct';
import { ButtonModule } from 'primeng/button';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Tag } from 'primeng/tag';
import { Dialog } from 'primeng/dialog';
import { SectionNavigationComponent } from '../../components/section-navigation/section-navigation.component';
import { PaymentService } from '../../services/payment/payment.service';
import { CartService } from '../../services/cart/cart.service';
import { UxService } from '../../services/ux/ux.service';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-product-details',
  imports: [
    RouterLink,
    RouterModule,
    ButtonModule,
    CommonModule,
    Tag,
    Dialog,
    SectionNavigationComponent,
    Toast,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  providers: [MessageService],
})
export class ProductDetailsComponent implements OnInit {
  service = inject(ApiService);
  route = inject(ActivatedRoute);
  productData: IProduct | undefined;
  quantity: number = 1;
  delivery: string = 'now';
  visibleDialog: boolean = false;
  inStock: boolean = true;
  payment = inject(PaymentService);
  cart = inject(CartService);
  ux = inject(UxService);
  messageService = inject(MessageService)

  showStockLimit() {
    this.messageService.add({
      severity: 'info',
      summary: 'Stock Limit',
      detail: 'You have reached the stock limit',
      life: 3000,
    });
  }

  addQuantity() {
    if (this.quantity < this.productData!.inStock) {
      this.quantity++;
    }else{
      this.showStockLimit()
    }
  }

  removeQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  handleCart() {
    this.cart.addProduct(this.productData!, this.quantity);
    this.visibleDialog = true;
  }

  handleBuy() {
    if (this.productData) this.payment.saveProduct([this.productData]);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productData = this.service.getProduct(Number(id));
    console.log(this.productData);

    this.inStock = this.productData.inStock ? true : false;

    // DEFINING DELIVERY TIME
    // TO BE CALCULETED BY DISTANCE
    this.delivery = `${2} hours`;

    this.ux.scrollToTop();
  }
}
