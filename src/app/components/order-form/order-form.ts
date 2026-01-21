import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-form.html'
})
export class OrderForm {
  name = '';
  phone = '';
  address = '';

  constructor(private cartService: CartService) {}

  placeOrder() {
    alert('Order placed successfully!');
    this.cartService.clearCart();
  }
}
