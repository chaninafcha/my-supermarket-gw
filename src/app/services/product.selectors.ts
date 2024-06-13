import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, productsFeatureKey } from './product.reducer';

export const selectProductState = createFeatureSelector<ProductState>(productsFeatureKey);

export const selectAllProducts = createSelector(selectProductState, (state) => state.products);

export const selectProductCount = createSelector(
  selectAllProducts,
  (products) => products.length
);