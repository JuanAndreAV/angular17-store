import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from 'src/app/domains/shared/components/header/header.component';
import { Product } from 'src/app/domains/shared/models/product.model';
import { CartService } from 'src/app/domains/shared/services/cart.service';
import { ProductService } from 'src/app/domains/shared/services/product.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
products = signal<Product[]>([]);
private cartService = inject(CartService);
private productService = inject(ProductService)

ngOnInit(){
  this.productService.getProducts()
  .subscribe({
    next: (products) => {
      this.products.set(products as Product[]);
    },
    error: (error) => {
      console.log(error);
      
    }
  })

}


 /*constructor(){
 const initProducts: Product[] = [
    {
      id: Date.now(),
      title: 'Producto 1',
      price: 100,
      img: 'https://picsum.photos/640/640?r-23',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 2',
      price: 100,
      img: 'https://picsum.photos/640/640?r-24',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 1',
      price: 100,
      img: 'https://picsum.photos/640/640?r-23',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 2',
      price: 100,
      img: 'https://picsum.photos/640/640?r-24',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 1',
      price: 100,
      img: 'https://picsum.photos/640/640?r-23',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 2',
      price: 100,
      img: 'https://picsum.photos/640/640?r-24',
      creationAt: new Date().toISOString()
    }
  ];
  this.products.set(initProducts)
}*/ // no requiero el constructor ya que los datos los traeré desde la API

 addToCart(product: Product){
    this.cartService.addToCart(product)
  }
}
