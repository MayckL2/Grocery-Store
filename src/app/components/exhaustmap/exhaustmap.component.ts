import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, delay, filter, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-exhaustmap',
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './exhaustmap.component.html',
  styleUrl: './exhaustmap.component.scss'
})
export class ExhaustmapComponent {
// Instanciando formgroup
  loginForm: FormGroup;

  // Configurando formbuild
  // Definindo os campos necessarios e os validators de cada um
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      search: ['', [Validators.required]],
    });

    // Tratativas para pesquisa com RXJS
    this.loginForm.valueChanges
      .pipe(
        // se não houver valor para buscar o pipe não procegue 
        filter(value => !!value),
        // espera 0.5 segundo para proceguir com o subscribe
        debounceTime(500),
        // chama a função websearch que retorna o resultado da requisição
        switchMap((value)=> this.webSearch(value || '')))
      // por fim exibe o resultado da busca
      .subscribe(value => console.log(value));
  }

  // função de busca
  webSearch(value: {search: string}){
    let searchValue = value.search
    // simmulador de onde ocorreria a requisição http
    return of(`Resultado... ${searchValue}` )
      .pipe(
        // exibe uma mensagem enquanto a requisição ocorre
        tap(value => console.log("Buscando...", searchValue)),
        // simula o delay da requisição
        delay(1000)
      );
  }
}
