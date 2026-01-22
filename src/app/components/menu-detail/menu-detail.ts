import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MenuItem } from '../../models/menu-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './menu-detail.html',
  styleUrls: ['./menu-detail.css']
})
export class MenuDetail implements OnInit {

  item?: MenuItem;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // temporary demo item
    this.item = {
      id: 1,
      name: 'Demo Dish',
      description: 'Tasty food',
      price: 199,
      category: 'Main'
    };
  }

  addToCart(item: MenuItem): void {
    this.cartService.addToCart(item);
  }
}
