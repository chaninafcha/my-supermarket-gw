import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  product:Product[]=[];
  private productSubject = new BehaviorSubject<Product>({
    id: 0,
    name: '',
    quentity: 0,
    category: {id:0,name:''} 
  });

  product$ = this.productSubject.asObservable();

  constructor() { }

  updateProduct(product: Product) {
    this.product.push(product);
    this.productSubject.next(product);
  }

  getProduct():Product[] {
    return this.product;
  }
}