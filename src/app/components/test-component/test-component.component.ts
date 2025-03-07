import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test-component',
  imports: [JsonPipe],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent implements OnDestroy, OnInit {
  apiData: any;
  subs = new Subscription();

  constructor(private api: APIService){
  }
  
  ngOnInit(): void {
    this.api.getAll().subscribe(value => this.apiData = value);
    // this.subs.add(subGetAll);
  }

  ngOnDestroy(): void{
    console.log('Componente destruido!');
    this.subs.unsubscribe
  }

    // testapi = inject(APIService)
    
    // test(){
    //   this.testapi.getAll()
    // }

}
