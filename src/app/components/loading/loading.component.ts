import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';
  
@Component({
  selector: 'app-loading',
  imports: [ProgressSpinner],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  steps: number = 0;
  message: string = 'Loading...';
}
