import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StockDataService } from 'src/app/services/stock-data.service';
import { Stock } from 'src/types/stock';

@Component({
  selector: 'stock-json-print',
  templateUrl: './stock-json-print.component.html',
  styleUrls: ['./stock-json-print.component.css']
})
export class StockJsonPrintComponent implements OnInit {

  constructor(private stockDataService: StockDataService) {

  }

  @Input() ciao?:string;
  @Output() ciaoChange:EventEmitter<string> = new EventEmitter<string>();

  public rnd():string{
    
    return Math.random() +""
  
  }

 stocks:Stock[]  = []

  ngOnInit(): void {

    //this.stocks = this.stockService.getStockData();
    this.stockDataService.stocks$.subscribe({
      next: (s: Stock[]) => {
        this.stocks = s;
      },
      error: (e) => {
        console.log('errore')
      }
    })
  }

  cio(){
    return JSON.stringify(this.stocks)
  }
}


