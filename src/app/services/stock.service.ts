import {Injectable} from '@angular/core';

@Injectable()
export class StockService {
  getStockData() {
    return [
      {
        name: 'AAPL',
        variance: 2,
        expectedReturn: 3
      },
      {
        name: 'GOOG',
        variance: 1,
        expectedReturn: 3
      },
      {
        name: 'GOOG2',
        variance: 1,
        expectedReturn: 3
      },
      {
        name: 'GOOG3',
        variance: 1,
        expectedReturn: 3
      },
      {
        name: 'GOOG5',
        variance: 1,
        expectedReturn: 3
      }
    ];
  }
}
