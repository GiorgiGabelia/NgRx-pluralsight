import { Product } from '../product';

import { ProductApiActions, ProductPageActions } from './actions';
import { createReducer, on } from '@ngrx/store';

//Interfaces
//Am moduleshi, global state-is interface-ad gamoviyenebt am interfaces;

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
  error: string;
}

//Initial state
const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
  error: '',
};

//Reducer
export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductPageActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),
  on(ProductPageActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProduct: action.product,
    };
  }),
  on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProduct: null,
    };
  }),
  on(ProductPageActions.initCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProduct: {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0,
      },
    };
  }),
  on(ProductApiActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
    };
  }),
  on(ProductApiActions.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error,
    };
  })
);
