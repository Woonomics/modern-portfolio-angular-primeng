import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import {ToolbarModule} from 'primeng/toolbar';
import {SliderModule} from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputNumberModule} from 'primeng/inputnumber';
import {PortfolioChartComponent} from './components/portfolio-chart/portfolio-chart.component';
import {HeaderToolbarComponent} from './components/header-toolbar/header-toolbar.component';
import {RateSliderComponent} from './components/rates-lider/rate-slider.component';
import {StocksTableComponent} from './components/stocks-table/stocks-table.component';
import {DialogService} from 'primeng/dynamicdialog';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TableModule,
    ChartModule,
    ToolbarModule,
    SliderModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputNumberModule,
    StocksTableComponent,
    PortfolioChartComponent,
    HeaderToolbarComponent,
    RateSliderComponent,
    HttpClientModule,
    ConfirmDialogModule
  ],
  providers: [DialogService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
