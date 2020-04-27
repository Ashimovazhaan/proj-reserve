import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {categories, LoginResponse} from './categories';
import {Products} from './products'
import { catchError, map, tap } from 'rxjs/operators';


import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from "./products";
import {url} from "inspector";


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }


  getCategory(): Observable<categories[]> {
    return this.http.get<categories[]>(`${this.BASE_URL}/categories/`);
  }

  getProduct(id): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/products/`);
  }

   getAuthor(id): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.BASE_URL}/authors/${id}`);
  }
   getAuthor(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.BASE_URL}/authors/`);
  }
   deleteAuthor(id): Observable<any> {
    return this.http.delete<Author[]>(`${this.BASE_URL}/authors/`);
  }
   getAuthorsProduct(id): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.BASE_URL}/authors/${id}/products`);
  }

  deleteCategory(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/categories/${id}/`);
  }
  updateCategory(id): Observable<any> {
    return this.http.post(url:`${this.BASE_URL}/categories/${id}/`);
  }
  updateProducts(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/products/${id}/`);
  }
  deleteProducts(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/products/${id}/`);
  }
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/login/`, {
      username,
      password
    });
}
