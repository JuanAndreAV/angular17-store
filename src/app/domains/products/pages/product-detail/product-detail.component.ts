import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/domains/shared/services/product.service';
import { Product } from 'src/app/domains/shared/models/product.model';
import { CartService } from 'src/app/domains/shared/services/cart.service';
import { HeaderComponent } from 'src/app/domains/shared/components/header/header.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

@Input() id?: string; 
product = signal<Product | null>(null) 
cover = signal('') 
private productService = inject(ProductService);
private cartService = inject(CartService);

ngOnInit(){
  if(this.id){
    this.productService.getOne()
    .subscribe({
      next: (product) => {
        this.product.set(product);
        if(product.images.length > 0){
          this.cover.set(product.images[0])
        }
      }
    })
  }
  
}

changeCover(newImg: string){
  this.cover.set(newImg)
}

addToCart(){
  const product = this.product();
  if(product){
    this.cartService.addToCart(product)
  }


}

}
