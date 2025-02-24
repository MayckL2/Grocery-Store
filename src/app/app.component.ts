import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test-component';
import { BehaviorSubject } from 'rxjs';
import { CustomPipePipe } from "./pipes/custom-pipe.pipe";
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  imports: [CustomPipePipe, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = signal('angular-store');

  constructor(){
    // EXEMPLO DO USO DE SIGNAL
    // console.log(this.title())
    this.title.set('store-angular')
    // console.log(`mudou o signal: ${this.title()}`)

    const firstNameCapitalized = computed(() => this.title().toUpperCase());

    // console.log(firstNameCapitalized()); // MORGAN
  }

  names: string[] = ['juvi', 'ana', 'banana', 'sapucaia']
  namesCopy: string[] = this.names
}
