import { Component, Input, AfterContentChecked } from '@angular/core';
import stock from '../../stock.json'
import { Router } from '@angular/router';
import { select } from '../../functions';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.scss'
})
export class StockListComponent implements AfterContentChecked {
  stock: any = stock
  loading: boolean= true

  constructor(private router: Router) {
  }

  // Função que armazena seleção de item do usuario e o redireciona para a tela daquele item
  select(choice: any) {
    // armazenamento
    select(choice)
    // redirecionamento
    this.router.navigate(['/sneacker']);
  }

  ngAfterContentChecked(): void{
    this.loading = false
  }
}
