import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  getProductApi='http://localhost:7558/products';

  constructor(private http: HttpClient) { }

  fetchProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.getProductApi);
  }
}
