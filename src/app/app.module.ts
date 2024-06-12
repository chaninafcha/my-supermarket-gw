import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListboxModule } from 'primeng/listbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ProductMenuComponent } from './product-menu/product-menu.component';





@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductMenuComponent
  ],
  imports: [
    ButtonModule,
    InputTextModule,
    BrowserModule,
    DropdownModule,
    AppRoutingModule,
    HttpClientModule,
    ListboxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
