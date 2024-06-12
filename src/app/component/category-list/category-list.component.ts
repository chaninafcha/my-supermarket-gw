import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { ProductMenuComponent } from 'src/app/product-menu/product-menu.component';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
 
  constructor(private categoryService:CategoryService,private componentFactoryResolver: ComponentFactoryResolver){}
  categoryList: Category[] = [];
  productList: Product[] = [];
  productName:string | undefined;
  currentCategory:Category={
    id: 0,
    name: ''
  };
  @ViewChild('container', { read: ProductMenuComponent }) container: ViewContainerRef | undefined;
  
  ngOnInit() {
       this.categoryService.GetAllCategories().subscribe(
        (categories: Category[]) => {
          this.categoryList = categories;
        }
      );
  }

  // onItemSelect(event: any) {
  //   this.currentCategory=event;
  //   console.log(event.value); // You can handle the selected value here
  // }
  _productList(){
    return this.productList;
  }
  
  onClick(productName:string,category:Category) {

    let newProduct: Product = {
      id: 0, 
      name: productName ,
      quentity:1,
      category: category
    };
    this.productList.push(newProduct);
  //  this.destroyAndCreateComponent();
  }

  destroyAndCreateComponent() {
    // Clear existing child components if any
    this.container?.clear();

    // Create a component factory for the ChildComponent
    const childComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ProductMenuComponent);

    // Create a new instance of the ChildComponent
    const childComponentRef = this.container?.createComponent(childComponentFactory);

    // You can also pass inputs to the newly created child component
    // childComponentRef.instance.inputProperty = value;
  }

}
