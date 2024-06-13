import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { ProductMenuComponent } from 'src/app/component/product-menu/product-menu.component';
import { CategoryService } from 'src/app/services/category.service';
import { DataService } from 'src/app/services/data.service';
import { Store } from '@ngrx/store';
import { addProduct } from 'src/app/services/product.action';
import { Observable } from 'rxjs';
import { selectAllProducts, selectProductCount } from 'src/app/services/product.selectors';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  products$: Observable<Product[]>;
  productCount$: Observable<number>;

  constructor(private categoryService:CategoryService,private dataService: DataService,private store: Store){
    this.products$ = this.store.select(selectAllProducts);
    this.productCount$ = this.store.select(selectProductCount);
  }
  categoryList: Category[] = [];
  productList: Product[] = [];
  productName:string | undefined;
  currentCategory:Category={
    id: 0,
    name: ''
  };
  
  ngOnInit() {
       this.categoryService.GetAllCategories().subscribe(
        (categories: Category[]) => {
          this.categoryList = categories;
        }
      );
  }
  
  
  onItemSelect(event: any) {
    this.currentCategory=event;
  }
  
  _productList(){
    return this.productList;
  }
  
  onClick(productName:string,category:Category) {
    var ExistProduct=this.productList.filter(x=>x.name==productName)[0];

    let newProduct: Product = {
      id: 0, 
      name: productName ,
      quentity:ExistProduct!=undefined?ExistProduct.quentity+1:1,
      category: category
    };
    
    this.productList.push(newProduct);
    this.dataService.updateProduct(newProduct);
    this.store.dispatch(addProduct({ product: newProduct }));
  }



}
