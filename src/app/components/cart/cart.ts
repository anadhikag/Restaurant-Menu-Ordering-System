import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
 
import { MenuItem } from '../../models/menu-item.model';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit, AfterViewInit {

  cartItems: MenuItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
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
}
