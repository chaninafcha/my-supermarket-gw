import { Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { Category } from '../../model/category.model';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.scss']
})
export class ProductMenuComponent {


  productSubscription: Subscription = new Subscription;
  productList :Product []=[];
  @Input()categories:Category[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.productSubscription = this.dataService.product$.subscribe(product => {
      if(product.name!="")
      this.productList.push(product);
    });
  }

  getProductsByCategory(category: number): Product[] {
    let item= this.productList.filter(product => product.category!=null && product.category.id == category);
    return item;
  }

  checkCategoryhasData(category: number):boolean
  {
    return this.productList.some(product =>product.category!=null && product.category.id == category);
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
  

}
