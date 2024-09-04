import { Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '../../../interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss'
})
export class InputOutputComponent implements OnDestroy {

  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      quantity: 10
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 20
    }
  ]);


  private intervalSubcription = interval(1000).pipe(
    tap(() => {
      console.log('products', this.products().length),
        this.products.update(products => [
          ...products, // products actuales q estan en el array
          {
            id: products.length + 1,
            name: `Product ${products.length + 1}`,
            quantity: 0
          }
        ])
    }),
    take(7)
  ).subscribe();


  public updateProductQuantity(event: number, product: Product) {
    console.log ('product', product);
    this.products.update((p) => {
      return p.map((prod) => {
        if (prod.id === product.id) {
          return {
            ...prod,
            quantity: event
          }
        }
        return prod;
      });
    })
  }

  ngOnDestroy(): void {
    this.intervalSubcription.unsubscribe();
  }

}
