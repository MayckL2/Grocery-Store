import { Injectable } from '@angular/core';
import { IBuy } from '../../models/IBuy';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../models/IProduct';
import stock from '../../../../database/stock.json';
import { ICategory } from '../../models/ICategory';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private products: IProduct[] = [];
  private categories: ICategory[] = [];

  constructor(){
    this.fetchApi();
  }

  // FETCH DATA FROM FAKE API
  private fetchApi() {
    this.products = stock.products;
    this.categories = stock.categories;
  }

  // RETURN ALL PRODUCTS
  getAll() {
    return this.products;
  }

  // RETURN ONE PRODUCT
  getProduct(id: number) {
    let data: IProduct[] = this.products ?? [];
    let product: IProduct[] = data.filter((e: IProduct) => e.id == id);

    return product[0];
  }

  // RETURN ALL PRODUCT WITH DISCOUNT
  getWithDiscount() {
    let haveDiscount = this.products?.filter((e) => e.discount);
    return haveDiscount;
  }

  getCategories(){
    return this.categories;
  }
}
