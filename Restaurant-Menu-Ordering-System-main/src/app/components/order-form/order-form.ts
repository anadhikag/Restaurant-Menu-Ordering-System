import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { OrderDialog } from '../order-dialog/order-dialog';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatCardModule, 
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './order-form.html',
  styleUrls: ['./order-form.css']
})
export class OrderForm implements OnInit {

  checkoutForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      paymentMethod: ['card', Validators.required]
    });
  }

  placeOrder(): void {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }

    const cartItems = this.cartService.getItems();
    if (cartItems.length === 0) {
      alert('Cart is empty.');
      return;
    }

    const orderData = {
      items: cartItems,
      totalAmount: this.cartService.getTotal(),
      customer: this.checkoutForm.value
    };

    this.orderService.placeOrder(orderData).subscribe({
      next: (val) => {
        const dialogRef = this.dialog.open(OrderDialog, {
          width: '400px',
          data: { orderId: val.id }
        });

        dialogRef.afterClosed().subscribe(() => {
          this.cartService.clearCart();
          this.router.navigate(['/']);
        });
      },
      error: (err) => {
        console.error('Failed to place order:', err);
      }
    });
  }
}

