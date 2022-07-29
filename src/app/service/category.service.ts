import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  postApi: string;

  constructor(private http: HttpClient) {
    this.postApi = 'http://localhost:7558/category';
   }


  postCategory(category: Category): Observable<any>{
    return this.http.post(this.postApi,category);
  }
}
