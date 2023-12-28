import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/domains/shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input({required: true}) Product!: Product;
  
  
  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    this.addToCart.emit(this.Product)
  }
}
