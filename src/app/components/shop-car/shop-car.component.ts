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
  total: number = 0

  constructor(private router: Router){
    console.log(this.array)
    // Atribuindo array de items do carrinho a variavel que mostrara na tela
    this.shopCar = this.array
    // Loop para fazer a soma dos preços dos itens do carrinho
    for (let i = 0; i < this.array.length; i++) {
      this.total += this.array[i].choice.preco * this.array[i].amount
    }
  }
  
  // Função que armazena seleção de item do usuario e o redireciona para a tela daquele item
  select(choice: any){
    // armazenamento
    select(choice)
    // redirecionamento
    this.router.navigate(['/sneacker']);
  }

  // Função que compra todos os itens armazenados no carrinho
  buyAll(){
    // compra
    buyAll()
    // recarrega a pagina
    location.reload()
  }
}
