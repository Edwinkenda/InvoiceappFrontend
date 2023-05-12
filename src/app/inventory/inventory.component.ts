import { Component, OnInit } from '@angular/core';
import { Invoice } from '../Interfaces/Invoice';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  invoices: Invoice[] = []; // Can be moved depending on which component needs invoices
  sidebarOpen: boolean;

  constructor(
    private invoiceService: InvoiceService,
  ) {}

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices() {
    this.invoiceService.getInvoices().subscribe((response: Invoice[]) => {
      this.invoices = response;
    });
  }
}
