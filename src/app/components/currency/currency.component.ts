import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataResponse } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';



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

  constructor(private currencyService:CurrencyService) { }

  ngOnInit(): void {
    this.refreshCurrency();
  }

  private refreshCurrency(){
    this.currencyService.refreshCurrency().subscribe((response) => {
      this.currency = response;
      })
  }

  refresh(){
    this.refreshCurrency()  
  }

}
