import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ICategory } from '../../models/ICategory';

@Component({
  selector: 'app-options-category',
  imports: [],
  templateUrl: './options-category.component.html',
  styleUrl: './options-category.component.scss'
})
export class OptionsCategoryComponent implements OnInit {
  api = inject(ApiService);
  options: ICategory[] = [];

  ngOnInit(): void {
    this.options = this.api.getCategories();
  }
}
