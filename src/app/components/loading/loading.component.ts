import { AfterViewChecked, Component, input, OnDestroy, OnInit } from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';
  
@Component({
  selector: 'app-loading',
  imports: [ProgressSpinner],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  steps: number = 0;
  message = input('Loading...');
  dataMessage = this.message()
}
