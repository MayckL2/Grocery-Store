import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [InputTextModule, CommonModule, FormsModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  imageLogo = '/assets/FreshcartLogo.png'
  value = ''
}
