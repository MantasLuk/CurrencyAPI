import { Component, OnInit } from '@angular/core';
import { Currency, DataResponse } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  public currency:DataResponse={
    amount:0,
    base: '',
    date: '',
    rates: { }
  }
  public from:string=""
  public to:string=""
  public isData:boolean=true;
  public allCurrency:Currency[]=[];

  constructor(private currencyService:CurrencyService) { }

  ngOnInit(): void {
    //this.refreshCurrency();
    this.currencyService.loadCurrencies().subscribe(()=>{
      this.allCurrency=this.currencyService.getCurrencies();
      this.isData=false;
    });
  }

  private refreshCurrency(){
    this.currencyService.refreshCurrency(this.from, this.to).subscribe((response) => {
      this.currency = response;
      this.isData=true;
      
      })
  }

  refresh(){
    this.refreshCurrency()
  }
}
