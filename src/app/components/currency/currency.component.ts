import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataResponse } from 'src/app/models/currency';



@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  public currency:DataResponse={
    amount:0,
    base: 'EUR',
    date: '2022-04-19',
    rates: {
      USD:0
    }
  }

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.refreshCurrency();
  }

  private refreshCurrency(){
    this.http.get<DataResponse>("https://api.frankfurter.app/latest?from=EUR&to=USD").subscribe(
      (response)=>{
        this.currency = response;
      }
    )
  }

  refresh(){
    this.refreshCurrency()
  }

}
