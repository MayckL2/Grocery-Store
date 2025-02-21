import { Component, input, Input } from '@angular/core';
import { TestComponent } from '../test-component';

@Component({
  selector: 'app-test-component',
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss',
})
export class TestComponentComponent {
  @Input() inputTest!: TestComponent;

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  testComponent: TestComponent = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
