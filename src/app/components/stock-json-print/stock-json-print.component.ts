import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StockDataService} from 'src/app/services/stock-data.service';
import {StockModel} from '../../models/stock.model';

@Component({
  selector: 'stock-json-print',
  templateUrl: './stock-json-print.component.html',
  styleUrls: ['./stock-json-print.component.css'],
  standalone: true
})
export class StockJsonPrintComponent implements OnInit {
  @Input() ciao?: string;
  @Output() ciaoChange: EventEmitter<string> = new EventEmitter<string>();
  stocks: StockModel[] = [];

  constructor(private stockDataService: StockDataService) {
  }

  public rnd(): string {
    return Math.random() + '';
  }

  ngOnInit(): void {
    //this.stocks = this.stockService.getStockData();
    this.stockDataService.stocks$.subscribe({
      next: (s: StockModel[]) => {
        this.stocks = s;
      },
      error: (e) => {
        console.log('errore', e);
      }
    });
  }

  cio() {
    return JSON.stringify(this.stocks);
  }
}


