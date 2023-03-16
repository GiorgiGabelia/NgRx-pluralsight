import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import { Product } from '../product';
import {
  getCurrentProduct,
  getShowProductCode,
  getProducts,
  State,
  getError,
} from '../state/product.reducer';
import * as ProductActions from 'src/app/products/state/product.actions';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';

  sub: Subscription;
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  displayProductCode$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());

    this.products$ = this.store.select(getProducts);

    this.selectedProduct$ = this.store.select(getCurrentProduct);

    this.displayProductCode$ = this.store.select(getShowProductCode);

    this.errorMessage$ = this.store.select(getError);
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({ product }));
  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }
}
