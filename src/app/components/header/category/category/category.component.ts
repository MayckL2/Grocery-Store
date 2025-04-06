import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

export interface Options {
  name: string,
  destination: string | undefined
}

@Component({
  selector: 'app-category',
  imports: [SelectModule, FormsModule, MatButtonModule, MatMenuModule, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  name = input<string>();
  options = input<Options[] | undefined>();
  // options: any = input<Options[]>();
}
