import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html'
})
export class Cart implements OnInit {
  cart: MenuItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  remove(index: number) {
    this.cartService.removeFromCart(index);
    this.cart = this.cartService.getCart();
  }

  total() {
    return this.cart.reduce((sum, i) => sum + i.price, 0);
  }
}
