import { createAction, props } from '@ngrx/store';
import { Product } from '../../product';

export const toggleProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction(
  '[Product page] Set Product Code',
  props<{ product: Product }>()
);

export const clearCurrentProduct = createAction(
  '[Product page] Clear Current Product'
);

export const initCurrentProduct = createAction(
  '[Product page] Initialize Curren Product'
);


export const loadProducts = createAction('[Product page] Load');

