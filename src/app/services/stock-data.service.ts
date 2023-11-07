import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, firstValueFrom} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {StockDataModel} from '../models/stock-data.model';
import {StockModel} from '../models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  private readonly http = inject(HttpClient);
  private readonly _stocks: BehaviorSubject<StockModel[]> = new BehaviorSubject<StockModel[]>([]);
  readonly stocks$ = this._stocks.asObservable();

  async getStockData(): Promise<void> {
    const url = 'assets/mocks/stocks.json';
    const get$ = this.http.get(url);
    const res = await firstValueFrom(get$);
    this.updateData(res as StockModel[]);
  }

  addNewStock(stock: StockDataModel): void {
    const existingData = this.retrieveExistingData();
    const generatedId = this.generateId(existingData);
    const completedStock = stock as StockModel;
    completedStock.id = generatedId;
    existingData.push(completedStock);
    this.updateData(existingData);
  }

  updateExistingStock(stockData: StockDataModel, id: number): void {
    const existingData = this.retrieveExistingData();
    const index = existingData.findIndex(stock => stock.id === id);
    const existingStock = existingData[index];
    const patchedStock = this.patchOldStockData(existingStock, stockData);
    existingData.splice(index, 1, patchedStock);
    this.updateData(existingData);
  }

  deleteStock(id: number): void {
    const existingData = this.retrieveExistingData();
    const index = existingData.findIndex(stock => stock.id === id);
    existingData.splice(index, 1);
    this.updateData(existingData);
  }

  private retrieveExistingData(): StockModel[] {
    return this._stocks.value;
  }

  private generateId(stocksData: StockModel[]): number {
    const length = stocksData.length;
    const lastElement = stocksData[length - 1];
    return lastElement.id + 1;
  }

  private patchOldStockData(oldStock: StockModel, newStock: StockDataModel): StockModel {
    oldStock.name = newStock.name;
    oldStock.variance = newStock.variance;
    oldStock.expectedReturn = newStock.expectedReturn;
    return oldStock;
  }

  private updateData(s: StockModel[]) {
    this._stocks.next(s);
  }
}
