import { Component, inject } from '@angular/core';
import { LivroStateService } from '../../../livros/livro.state.service';
import { Livro } from '../../../livros/livro.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-state',
  imports: [AsyncPipe, CommonModule, FormsModule],
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss'
})
export class StateComponent {
  private livroStateService = inject(LivroStateService);
  protected livros$ = this.livroStateService.escutarMudancasDeLivros();

  protected livroInput = '';

  ngOnInit(): void {
    this.livroStateService.carregarLivros();
  }

  adicionar() {
    const livro: Livro = {
      id: 10,
      nome: this.livroInput,
    };

    this.livroStateService.adicionarLivro(livro);
  }
}
