import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';


import { PortfoliochartComponent } from './components/portfoliochart/portfoliochart.component';
import { HeadertoolbarComponent } from './components/headertoolbar/headertoolbar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RatesliderComponent } from './components/rateslider/rateslider.component';
import { StockstableComponent } from './components/stockstable/stockstable.component';
import { StockJsonPrintComponent } from './components/stock-json-print/stock-json-print.component';


@NgModule({
  declarations: [
    AppComponent,
    StockstableComponent,
    PortfoliochartComponent, 
    HeadertoolbarComponent, 
    SettingsComponent,
    RatesliderComponent,
    StockJsonPrintComponent
  
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
    InputNumberModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
