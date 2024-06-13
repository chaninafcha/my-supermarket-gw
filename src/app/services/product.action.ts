// src/app/products/product.actions.ts
import { createAction, props } from '@ngrx/store';
import { Product } from '../model/product.model';

export const addProduct = createAction('[Product] Add Product', props<{ product: Product }>());
