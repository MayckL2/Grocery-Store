import { Injectable } from '@angular/core';
import { IBuy } from '../../models/IBuy';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../models/IProduct';
import stock from '../../../../database/stock.json';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  // FETCH DATA FROM FAKE API
  fetchApi() {
    return stock;
  }

  // RETURN ALL PRODUCTS
  getAll() {
    return this.fetchApi();
  }

  // RETURN ONE PRODUCT
  getProduct(id: number) {
    let data: IProduct[] = this.fetchApi().products;
    let product: IProduct[] = data.filter((e: IProduct) => e.id == id);

    return product[0];
  }

  // RETURN ALL PRODUCT WITH DISCOUNT
  getWithDiscount() {
    let all = this.fetchApi();
    let haveDiscount = all.products.filter((e) => e.discount);

    return haveDiscount;
  }

}
