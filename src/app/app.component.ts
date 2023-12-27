import { Component } from '@angular/core';
import stock from './stock.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'store-angular';
  tenis: string = ''
  img: string = ''
  stock: any = stock

  constructor(){
    console.log(stock)
    this.tenis = stock[0].modelo
    this.img = stock[0].img
  }

  select(choice: any){
    console.log(choice)
  }
}
