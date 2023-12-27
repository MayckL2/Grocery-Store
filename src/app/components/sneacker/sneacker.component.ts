import { Component } from '@angular/core';
import { addCar } from '../../functions';

@Component({
  selector: 'app-sneacker',
  templateUrl: './sneacker.component.html',
  styleUrl: './sneacker.component.scss'
})
export class SneackerComponent {
  choice: any = sessionStorage.getItem("choice")
  estoque: any = JSON.parse(this.choice)
  amount: any = []
  quantity: number = 1
  size: number = 0

  constructor() {
    for (let i = 0; i < this.estoque.estoque; i++) {
      this.amount.push(i + 1) 
    }
    // console.log(this.amount)
    console.log(JSON.parse(this.choice))
    this.choice = JSON.parse(this.choice)
    this.size = this.choice.tamanhos[0]
  }
  
  newCar: string = ''
  storage: any = []

  addCar(choice: any){
    addCar(choice, this.quantity, this.size)
    // console.log(this.quantity) 
  }
}
