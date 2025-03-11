import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import axios from 'axios';
import { Observable, shareReplay } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  baseUrl = "https://simple-grocery-store-api.glitch.me/"

  constructor(private http: HttpClient){
    // this.http.get(this.baseUrl).subscribe(config => { 
    //   console.log("retorno api:", config)
    // })
  }

  // Retorna todos os produtos
  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.baseUrl + "products")
  }

}
