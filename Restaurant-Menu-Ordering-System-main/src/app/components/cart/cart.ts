import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
 
import { MenuItem } from '../../models/menu-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit, AfterViewInit {

  cartItems: MenuItem[] = [];
  total = 0;
  cartForm!: FormGroup;

  constructor(
    private cartService: CartService, 
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
     this.cartForm = this.fb.group({
       specialInstructions: ['']
     });
     this.loadCart();
  }

  ngAfterViewInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  remove(item: MenuItem): void {
    this.cartService.remove(item);
    this.loadCart();
  }

  proceedToCheckout(): void {
    console.log('Instructions:', this.cartForm.value.specialInstructions);
    this.router.navigate(['/order']);
  }
}
