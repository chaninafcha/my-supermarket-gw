import { Component, Input } from '@angular/core';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.scss']
})
export class ProductMenuComponent {

  private _productList: Product[] = [];

  @Input() productList :Product []=[];
  @Input()categories:Category[]=[];



  getProductsByCategory(category: number): Product[] {
    let a= this.productList.filter(product => product.category.id == category);
    return a;
  }
  

}
