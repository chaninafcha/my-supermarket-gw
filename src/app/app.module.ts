import { NgModule, isDevMode } from '@angular/core';
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
import { ProductMenuComponent } from './component/product-menu/product-menu.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { productReducer, productsFeatureKey } from './services/product.reducer';






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
    BrowserAnimationsModule,
    StoreModule.forRoot({ [productsFeatureKey]: productReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
