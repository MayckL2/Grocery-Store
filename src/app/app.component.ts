import { Component, OnInit, AfterContentChecked } from '@angular/core';
import stock from './stock.json'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterContentChecked {
  title = 'store-angular';
  contCart: number = 0

  constructor(){
    this.contCart = JSON.parse(sessionStorage.getItem('car') || '[]').length
    // console.log(this.contCart)
  }

  ngAfterContentChecked(): void { 
    this.contCart = JSON.parse(sessionStorage.getItem('car') || '[]').length
  }
}
