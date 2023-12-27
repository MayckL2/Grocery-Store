import { Component } from '@angular/core';
import stock from '../../stock.json'
import { Router } from '@angular/router';
import { buyAll, select } from '../../functions';

@Component({
  selector: 'app-shop-car',
  templateUrl: './shop-car.component.html',
  styleUrl: './shop-car.component.scss'
})
export class ShopCarComponent {
  shopCar: any = []
  array: any = JSON.parse(sessionStorage.getItem('car') || '[]')
  newArray: any = []

  constructor(private router: Router){
    console.log(this.array)
    this.shopCar = this.array ? this.array : []
  }
  
  select(choice: any){
    select(choice)
    this.router.navigate(['/sneacker']);
  }

  buyAll(){
    buyAll()
    location.reload()
  }
}
