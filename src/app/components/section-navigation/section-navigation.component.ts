import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-section-navigation',
  imports: [Button, RouterModule],
  templateUrl: './section-navigation.component.html',
  styleUrl: './section-navigation.component.scss'
})
export class SectionNavigationComponent {

  constructor(private location: Location) { }
  back(): void {
    this.location.back();
  }
}
