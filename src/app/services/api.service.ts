import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import axios from 'axios';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  baseUrl = "https://simple-grocery-store-api.glitch.me/"
  data: any

  constructor(private http: HttpClient){
    this.http.get(this.baseUrl).subscribe(config => { 
      console.log("retorno api:", config)
      this.data = config
    })
  }

  getAll(): Observable<any[]>{
    return this.http.get<any>(this.baseUrl)
    // return this.data;
  }

  static apiData() {
    // axios(this.baseUrl,{
    //   method: "get",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     'Content-Type': 'application/json'
    // }
    // })
    // .then(e => console.log(e))
  }
}
