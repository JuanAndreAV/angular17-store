import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({required:true}) Cart: Product[] = [];
  total = signal(0);

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }
  ngOnChanges(changes: SimpleChanges){
    const cart = changes['Cart'];
    if (cart){
      this.total.set(this.totalCart());
    }
  }
  totalCart(){
   return this.Cart.reduce((total, product) => total + product.price, 0);
  }
}
