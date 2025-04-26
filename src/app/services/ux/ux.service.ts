import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UxService {
  private viewPort = inject(ViewportScroller);
  private viaCepUrl = 'https://viacep.com.br/ws';
  private http = inject(HttpClient);

  constructor() { }

  colectAdressByCep(cep: string): Observable<any>{
    let url = `${this.viaCepUrl}/${cep}/json/`
    let data = this.http.get(url)
    console.log(url)
    return data;
  }

  scrollToTop() {
    this.viewPort.scrollToPosition([0, 0]);
  }
}
