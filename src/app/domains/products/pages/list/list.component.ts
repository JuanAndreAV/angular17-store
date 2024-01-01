import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from 'src/app/domains/shared/components/header/header.component';
import { Product } from 'src/app/domains/shared/models/product.model';
import { CartService } from 'src/app/domains/shared/services/cart.service';
import { ProductService } from 'src/app/domains/shared/services/product.service';
import { CategoryService } from 'src/app/domains/shared/services/category.service';
import { Category } from 'src/app/domains/shared/models/category,model';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
products = signal<Product[]>([]);
categories = signal<Category[]>([])
private cartService = inject(CartService);
private productService = inject(ProductService);
private categoryService = inject(CategoryService)



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
ngOnInit(){
  this.getProducts();
  this.getCategories();
}
 addToCart(product: Product){
    this.cartService.addToCart(product)
  }

  private getProducts(){
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

  private getCategories(){
    this.categoryService.getAll()
    .subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: (error) => {
        console.log(error);
        
      }
    })
  }

}
