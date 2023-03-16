import { createAction, props } from '@ngrx/store';
import { Product } from '../../product';

export const loadProductsSuccess = createAction(
  '[Product Api] Load Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Product Api] Load Fail',
  props<{ error: string }>()
);
