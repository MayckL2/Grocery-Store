import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  url = "https://simple-grocery-store-api.glitch.me/"

  constructor(private http: HttpClient){
    http.get(this.url).subscribe(config => { 
      console.log(config)
    })
  }

  static apiData() {
    // axios(this.url,{
    //   method: "get",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     'Content-Type': 'application/json'
    // }
    // })
    // .then(e => console.log(e))
  }
}
