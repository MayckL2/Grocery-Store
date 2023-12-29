import { Component, Input, AfterContentChecked, OnChanges, SimpleChanges } from '@angular/core';
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
  search: string = ''

  constructor(private router: Router) {
  }

  // Função que armazena seleção de item do usuario e o redireciona para a tela daquele item
  select(choice: any) {
    // armazenamento
    select(choice)
    // redirecionamento
    this.router.navigate(['/sneacker']);
  }

  // Tirar carregamento quando componentes forem checados
  ngAfterContentChecked(): void{
    this.loading = false
  }

  // Função para filtrar pesquisa do usuario
  ChangeSearch(){
    // console.log(this.search)
    if(this.search == ''){
      this.stock = stock
    }else{
      this.stock = stock.filter((e: any)=> e.modelo.includes(this.search))
    }
    // console.log(this.stock)
  }
}
