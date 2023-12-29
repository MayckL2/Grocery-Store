import { Component } from '@angular/core';
import { addCar } from '../../functions';
import Swal from 'sweetalert2';

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
  selectSize: number = 0
  selected: string = 'border-firstColor'

  constructor() {
    // salva quantidade do item no estoque para ser renderizado como array
    for (let i = 0; i < this.estoque.estoque; i++) {
      this.amount.push(i + 1)
    }

    console.log(JSON.parse(this.choice))
    // coleta escolha do usuario salva no sessionStorage para ser renderizado na tela
    this.choice = JSON.parse(this.choice)
    // coleta primeiro tamanho do tenis para ser mostrado por padrão na tela
    this.selectSize = this.choice.tamanhos[0]
  }

  // Função para salvar escolha de item no carrinho
  addCar(choice: any) {
    addCar(choice, this.quantity, this.selectSize)
    Swal.fire({
      icon: 'success',
      title: `${this.choice.modelo} Foi adicionado ao carrinho`,
      toast: true,
      position: 'top-right',
      iconColor: '#231F20',
      color: '#231F20',
      background: '#FAD91E',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })
    // console.log(this.quantity) 
  }

  // Função para selecionar e salvar a escolha do tamanho do tenis
  choseSize(size: number) {
    this.selectSize = size
  }

  // Função para comprar item
  buy() {
    Swal.fire({
      icon: 'success',
      title: `Compra do ${this.choice.modelo} realizada com sucesso!`,
      toast: true,
      position: 'top-right',
      iconColor: '#FAD91E',
      color: '#FAD91E',
      background: 'green',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
    })
  }

}
