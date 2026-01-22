import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { MenuItem } from '../../models/menu-item.model';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './menu-list.html',
  styleUrls: ['./menu-list.css']
})
export class MenuList implements OnInit {

  // 👇 ADD HERE
  menuItems: MenuItem[] = [];

  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) {}

  // 👇 ADD HERE
  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }

  // 👇 ADD HERE
  addToCart(item: MenuItem): void {
    this.cartService.addToCart({ ...item });
    alert('Added to cart');
  }
}
