import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  productService = inject(ProductService);
  categories = this.productService.getCategories();
  servicesOptions = [
    "About Us",
    "Terms & Conditions",
    "FAQ",
    "Privacy Policy",
    "E-waste Policy",
    "Concellation & Return Policy"
  ]

  ngOnInit(): void {
  }
}
