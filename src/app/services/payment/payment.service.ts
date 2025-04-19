import { Injectable } from '@angular/core';
import { IAdress } from '../../models/IAdress';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  protected dataAdress: IAdress | undefined

  constructor() { }

  saveAdress(adress: IAdress){
    this.dataAdress = adress
    return "Adress save!"
  }

  getAdress(){
    return this.dataAdress
  }

  validateAdress(adress: IAdress): string|boolean{
    if(!adress.cep){
      return "CEP is necessary...";
    }
    if(!adress.state){
      return "State is necessary...";
    }
    if(!adress.neighborhood){
      return "Neighborhood is necessary...";
    }
    if(!adress.street){
      return "Street is necessary...";
    }
    if(!adress.number){
      return "Number is necessary...";
    }
    if(!adress.complement){
      return "Complement is necessary...";
    }
    if(!adress.receiver){
      return "Receiver is necessary...";
    }
 
    return true
  }
}
