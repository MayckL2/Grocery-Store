import { AfterContentChecked, Component, Input } from '@angular/core';
import { select } from '../../functions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements AfterContentChecked{
  loading: boolean = true
  @Input() stock: any = []
  // @Input() modelo: string =''
  // @Input() loading: boolean = true
  // @Input() img: string =''
  // @Input() preco: number = 0
  // @Input() tamanhos: any = []

  constructor(private router: Router) {
    // console.log(this.tenis)
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

}
