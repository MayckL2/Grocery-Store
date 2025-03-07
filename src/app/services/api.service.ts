import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  baseUrl = "https://simple-grocery-store-api.glitch.me/"

  constructor(private http: HttpClient){
    http.get(this.baseUrl).subscribe(config => { 
      console.log(config)
    })
  }

  getAll(): Observable<any[]>{
    return this.http.get<any>(this.baseUrl)
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
