import { Product } from './product.class';

export class Cart extends Product {
  cantidad: number;
  added: boolean;
  constructor(product: Product) {
    super(product);
    this.cantidad = 1;
    this.added = true;
  }
}
