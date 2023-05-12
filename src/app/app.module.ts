import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { HomeComponent } from './components/home/home.component';
import { InvoiceService } from './services/invoice.service';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { InvoicesTotalComponent } from './components/invoices-total/invoices-total.component';
import { LoginComponent } from './login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ErrorComponent } from './error/error/error.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    
    AddInvoiceComponent,
    HomeComponent,
    InvoiceComponent,
    DialogComponent,
    InvoicesTotalComponent,
    LoginComponent,
    InventoryComponent,
    ErrorComponent,
    AppComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatTableModule,
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
