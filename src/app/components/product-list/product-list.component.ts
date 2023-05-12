import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/Product';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products : Product[];

  constructor(public productservice: ProductService){}

  ngOnInit() {

    this.getProducts();
    
  }

    public getProducts(){

      this.productservice.getProducts().subscribe((response: Product[]) => {
        this.products = response;
      });
      /*(error : HttpErrorResponse) => {

        alert(error.message);
      }*/


     
      (error : HttpErrorResponse) => {

        alert(error.message);
      }
    }

  

}
