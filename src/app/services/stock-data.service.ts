import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stock } from 'src/types/stock';


@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor() { }

  private  stocksObs : BehaviorSubject<Stock[]> = new  BehaviorSubject<Stock[]>([]);

  public get stocks$(): Observable<any>{
    return this.stocksObs.asObservable();
  }

  public setStocks(s:Stock[]){
    this.stocksObs.next(s)
  }

}
