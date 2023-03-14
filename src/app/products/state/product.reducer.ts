import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Product } from '../product';
import * as AppState from 'src/app/state/app.state';

//Interfaces
//Am moduleshi, global state-is interface-ad gamoviyenebt am interfaces;
export interface State extends AppState.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

//Initial state
const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
};

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

//Reducer
export const productReducer = createReducer<ProductState>(
  initialState,
  on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  })
);