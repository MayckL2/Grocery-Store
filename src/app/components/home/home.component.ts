import { Component, inject, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TestComponentComponent } from "../test-component/test-component.component";

@Component({
  selector: 'app-home',
  imports: [JsonPipe, AsyncPipe, TestComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  // api = inject(APIService);
  apiData: any

  constructor(private api: APIService){
  }
  
  ngOnInit(): void {
    this.api.getAll().subscribe(value => {
      this.apiData = value
    });
    // this.apiData = this.api.getAll();
    console.log(this.api.baseUrl)
  }
}
