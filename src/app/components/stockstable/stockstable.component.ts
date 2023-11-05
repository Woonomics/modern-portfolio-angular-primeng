import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Stock } from 'src/types/stock';
import { Table } from 'primeng/table';
import { BehaviorSubject } from 'rxjs';
import { StockService } from 'src/app/services/stockservice';
import { StockDataService } from 'src/app/services/stock-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'stockstable',
  templateUrl: './stockstable.component.html',
  providers: [StockService, MessageService]
})
export class StockstableComponent implements OnInit {

  stocks!: Stock[];


  editing: boolean = false;

  clonedStocks: { [s: string]: Stock } = {};

  constructor(
    private stockService: StockService,
    private stockDataService: StockDataService,
    private messageService: MessageService,
    private formBuilder:FormBuilder,
  ) { }

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

    this.stockDataService.setStocks([
      {
        name: "AAPL",
        variance: 2,
        exreturn: 3
      },
      {
        name: "GOOG",
        variance: 1,
        exreturn: 3
      },
      {
        name: "GOOG2",
        variance: 1,
        exreturn: 3
      },
      {
        name: "GOOG3",
        variance: 1,
        exreturn: 3
      },
      {
        name: "GOOG5",
        variance: 1,
        exreturn: 3
      },
    ])

  }

  onRowEditInit(stock: Stock, ri:number) {
    this.clonedStocks[stock.name as string] = { ...stock };
    this.editing = true;
    console.log(this.editing)
    this.editingIndex =  ri;
    this.form.patchValue(stock);

  }

  saveEdit(){
    console.log(this.form.valid, this.form.errors, this.editingIndex  )
    if(this.form.valid  && this.editingIndex !== undefined){
      

      this.stocks[this.editingIndex] = this.form.value;
      this.stockDataService.setStocks(this.stocks)
      this.editing = false;
      this.editingIndex =  undefined;
    }

  }
  ciao?:string
  editingIndex?:number

  onRowEditSave(stock: Stock) {
    if (stock.variance > 0) {
      delete this.clonedStocks[stock.name as string];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
    }
  }

  onRowEditCancel(stock: Stock, index: number) {
    this.stocks[index] = this.clonedStocks[stock.name as string];

    delete this.clonedStocks[stock.name as string];
  }

  onRowRemove(stock: Stock, index: number) {
    
    this.messageService.add({ severity: 'error', summary: 'Removed ', detail: 'Invalid Price' });
    
    this.stocks.splice(index, 1);

    //this.stockDataService.setStocks(this.stocks)
    console.log(this.stocks)

  }

  clear(table: Table) {
    table.clear();
  }

  form: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    variance:[null, [Validators.required, Validators.min(0)]],
    exreturn: [null, [Validators.required, Validators.min(0)]],
  })


  
}

