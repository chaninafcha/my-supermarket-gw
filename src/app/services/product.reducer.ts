// src/app/products/product.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Product } from '../model/product.model';
import { addProduct } from './product.action';

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: [],
};

export const productsFeatureKey = 'products';

export const productReducer = createReducer(
    initialState,
    on(addProduct, (state, { product }) => ({
      ...state,
      products: [...state.products, product]
    }))
  );
