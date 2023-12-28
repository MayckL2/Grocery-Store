import { Component, Input } from '@angular/core';
import stock from '../../stock.json'
import { Router } from '@angular/router';
import { select } from '../../functions';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.scss'
})
export class StockListComponent {
  stock: any = stock

  constructor(private router: Router) {
  }

  // Função que armazena seleção de item do usuario e o redireciona para a tela daquele item
  select(choice: any) {
    // armazenamento
    select(choice)
    // redirecionamento
    this.router.navigate(['/sneacker']);
  }
}
