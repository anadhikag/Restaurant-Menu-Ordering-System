import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private key = 'cart';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getCart(): MenuItem[] {
    if (!this.isBrowser) return [];
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  addToCart(item: MenuItem) {
    const cart = this.getCart();
    cart.push(item);
    localStorage.setItem(this.key, JSON.stringify(cart));
  }

  removeFromCart(index: number) {
    const cart = this.getCart();
    cart.splice(index, 1);
    localStorage.setItem(this.key, JSON.stringify(cart));
  }

  clearCart() {
    if (!this.isBrowser) return;
    localStorage.removeItem(this.key);
  }
}
