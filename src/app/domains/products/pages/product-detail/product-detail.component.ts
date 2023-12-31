import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/domains/shared/services/product.service';
import { Product } from 'src/app/domains/shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

@Input() id?: string; 
product = signal<Product | null>(null) 
private productService = inject(ProductService);

ngOnInit(){
  if(this.id){
    this.productService.getOne()
    .subscribe({
      next: (product) => {
        this.product.set(product);
      }
    })
  }
  
}

}
