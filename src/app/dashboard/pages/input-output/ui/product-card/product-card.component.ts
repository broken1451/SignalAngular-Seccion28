import { Component, effect, EventEmitter, input, Input, OnInit, output, Output } from '@angular/core';
import { Product } from '../../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit{

  // @Input({required: true}) product!: Product;
  public product = input.required<Product>({});

  
  // @Output() incrementQuantity =  new EventEmitter<number>();
  public incrementQuantity = output<number>();

  public loginEffect = effect(() => {
    console.log('product', this.product().name);
  });


  ngOnInit(): void {
    console.log('product', this.product());
  }

  increment(): void {
    // this.incrementQuantity.emit(this.product.quantity + 1);
    this.incrementQuantity.emit(this.product().quantity + 1);
  }
}
