import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponse } from 'src/app/models/currency';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http:HttpClient) { }


  public refreshCurrency(){
  return this.http.get<DataResponse>("https://api.frankfurter.app/latest?from=EUR&to=USD");

  }
}
