import { Component, Input } from '@angular/core';
import stock from '../../stock.json'
import { Router } from '@angular/router';
import { select } from '../../functions';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.scss'
})
export class StockListComponent {
  stock: any = stock
  
  constructor(private router: Router){

  }

  select(choice: any){
    select(choice)
    this.router.navigate(['/sneacker']);
  }
}
