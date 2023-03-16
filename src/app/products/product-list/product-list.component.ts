import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import {
  getCurrentProduct,
  getShowProductCode,
  State,
} from '../state/product.reducer';
import * as ProductAtions from 'src/app/products/state/product.actions';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(
    private productService: ProductService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.store.select(getCurrentProduct).subscribe((currentProduct) => {
      this.selectedProduct = currentProduct;
    });

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => (this.products = products),
      error: (err) => (this.errorMessage = err),
    });

    this.store.select(getShowProductCode).subscribe((showProductCode) => {
      this.displayCode = showProductCode;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkChanged(): void {
    this.store.dispatch(ProductAtions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductAtions.initCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductAtions.setCurrentProduct({ product }));
  }
}
