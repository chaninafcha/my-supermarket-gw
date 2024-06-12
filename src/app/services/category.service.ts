import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
private httpclient:HttpClient

  ) { }

  GetAllCategories():Observable<Category[]>{
    return this.httpclient.get<Category[]>('http://localhost:5280/api/Categories');
  }
}
