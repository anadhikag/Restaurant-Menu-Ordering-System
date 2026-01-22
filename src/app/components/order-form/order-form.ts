import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './order-form.html'
})
export class OrderForm {

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  placeOrder(): void {
    alert('✅ Order placed successfully!');
    this.cartService.clearCart();
    this.router.navigate(['/menu']);
  }
}
