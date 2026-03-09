import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { MenuItem } from '../../models/menu-item.model';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';

import { FilterPipe } from '../../pipes/filter.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    FilterPipe,
    HighlightDirective
  ],
  templateUrl: './menu-list.html',
  styleUrls: ['./menu-list.css']
})
export class MenuList implements OnInit {

  menuItems: MenuItem[] = [];
  searchText: string = '';

  constructor(
    private menuService: MenuService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe(items => {
      this.menuItems = items;
    });
  }

  addToCart(item: MenuItem): void {
    this.cartService.addToCart({ ...item });
    this.snackBar.open(`${item.name} added to cart`, 'Close', {
      duration: 3000
    });
  }
}

