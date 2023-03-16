import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from 'src/app/state/app.state';
import { ProductState } from './product.reducer';

export interface State extends AppState.State {
  products: ProductState;
}

//Selectors
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  (state) => state.showProductCode //projector function; state here is the product slice of the whole state (this is because our configuration in product.module)
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  (state) => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  (state) => state.products
);

export const getError = createSelector(
  getProductFeatureState,
  (state) => state.error
);
