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

  // internal helper
  private getCart(): MenuItem[] {
    if (!this.isBrowser) return [];
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  private saveCart(cart: MenuItem[]): void {
    if (!this.isBrowser) return;
    localStorage.setItem(this.key, JSON.stringify(cart));
  }

  addToCart(item: MenuItem): void {
    const cart = this.getCart();
    cart.push(item);
    this.saveCart(cart);
  }

  getItems(): MenuItem[] {
    return this.getCart();
  }

  remove(item: MenuItem): void {
  const cart = this.getCart().filter(i => i.id !== item.id);
  this.saveCart(cart);
}

  clearCart(): void {
    if (!this.isBrowser) return;
    localStorage.removeItem(this.key);
  }

  getTotal(): number {
    return this.getCart().reduce((sum, item) => sum + item.price, 0);
  }
}
