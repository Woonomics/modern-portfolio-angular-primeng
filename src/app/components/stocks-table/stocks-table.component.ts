import {Component, inject, OnInit} from '@angular/core';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {StockDataService} from 'src/app/services/stock-data.service';
import {ReactiveFormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DialogService, DynamicDialogConfig} from 'primeng/dynamicdialog';
import {StockDialogComponent} from '../stock-dialog/stock-dialog.component';
import {AsyncPipe, NgIf} from '@angular/common';
import {Observable, take} from 'rxjs';
import {StockDataModel} from '../../models/stock-data.model';
import {StockModel} from '../../models/stock.model';

@Component({
  selector: 'stocks-table',
  templateUrl: './stocks-table.component.html',
  imports: [
    DialogModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    AsyncPipe,
    NgIf
  ],
  standalone: true
})
export class StocksTableComponent implements OnInit {
  protected stocks$?: Observable<StockModel[]>;
  private readonly dialogService = inject(DialogService);
  private readonly stockDataService = inject(StockDataService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly messageService = inject(MessageService);

  ngOnInit(): void {
    this.initData().then();
  }

  protected onDeleteClick(stock: StockModel) {
    this.confirmationService.confirm({
      header: 'Warning',
      message: `Are tou sure you want to delete the stock ${stock.name}?`,
      acceptLabel: 'Proceed',
      rejectLabel: 'Cancel',
      accept: () => this.deleteStock(stock)
    });
  }

  protected editRow(stock: StockModel) {
    this.openStockDialog(stock);
  }

  protected onAddNewStock(): void {
    this.openStockDialog();
  }

  private async initData(): Promise<void> {
    this.stocks$ = this.stockDataService.stocks$;
    await this.stockDataService.getStockData();
  }

  private openStockDialog(stock?: StockModel): void {
    const config: DynamicDialogConfig<any> = {
      header: stock ? 'Edit stock' : 'Add new stock',
      data: stock
    };
    const ref = this.dialogService.open(StockDialogComponent, config);
    ref.onClose
      .pipe(take(1))
      .subscribe((stockData?: StockDataModel) => {
        if (!stockData) {
          return;
        }
        this.onDialogCloseHandler(stockData, stock?.id);
      });
  }

  private onDialogCloseHandler(data: StockDataModel, id?: number): void {
    if (!id) {
      this.stockDataService.addNewStock(data);
      return;
    }
    this.stockDataService.updateExistingStock(data, id);
  }

  private deleteStock(stock: StockModel) {
    this.stockDataService.deleteStock(stock.id);
    const message: Message = {
      summary: 'SUCCESS',
      detail: `The stock with name ${stock.name} has been deleted correctly`,
      severity: 'success'
    };
    this.messageService.add(message);
  }
}

