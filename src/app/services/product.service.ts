import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../common/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/products/all`);
  }
}
