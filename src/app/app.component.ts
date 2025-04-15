import { AfterContentChecked, AfterViewChecked, Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test-component';
import { BehaviorSubject } from 'rxjs';
import { CustomPipePipe } from "./pipes/custom-pipe.pipe";
import { FormComponent } from './components/form/form.component';
import { ObservablesComponent } from "./components/observables/observables.component";
import { ExhaustmapComponent } from "./components/exhaustmap/exhaustmap.component";
import { HeaderComponent } from "./components/header/header.component";
import { InfoComponent } from "./components/info/info.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, InfoComponent, LoadingComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterContentChecked {
  title = signal('angular-store');
  loaded: boolean = false;

  constructor(){
    // EXEMPLO DO USO DE SIGNAL
    // console.log(this.title())
    this.title.set('store-angular')
  }
  
  ngAfterContentChecked(): void {
    this.loaded = true;
  }
}
