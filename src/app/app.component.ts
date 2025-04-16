import { AfterContentChecked, AfterViewChecked, Component, computed, effect, Inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { InfoComponent } from "./components/info/info.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { CommonModule, DOCUMENT } from '@angular/common';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, InfoComponent, LoadingComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterContentChecked {
  loaded: boolean = false;
  interval$ = interval(1000);
  
  constructor(@Inject(DOCUMENT) private document: Document){
    this.document.body.style.overflow = 'hidden';
    
  }
  
  hiddenLoad(){
    // this.interval$
    // .pipe(take(2))
    // .subscribe(e => {
    //   console.log(e)
    // });

    this.loaded = true;
    this.document.body.style.overflow = '';
  }

  ngAfterContentChecked(): void {
    this.hiddenLoad();
  }
}
