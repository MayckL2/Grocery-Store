import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test-component';
import { BehaviorSubject } from 'rxjs';
import { CustomPipePipe } from "./pipes/custom-pipe.pipe";
import { FormComponent } from './components/form/form.component';
import { ObservablesComponent } from "./components/observables/observables.component";
import { ExhaustmapComponent } from "./components/exhaustmap/exhaustmap.component";
import { HeaderComponent } from "./components/header/header.component";
import { InfoComponent } from "./components/info/info.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = signal('angular-store');
  showTest: boolean = true;

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

  toggleTest(){
    console.log("funfou")
    this.showTest = !this.showTest
  }
}
