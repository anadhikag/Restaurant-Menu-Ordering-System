import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { MenuItem } from '../../models/menu-item.model';
import { CartService } from '../../services/cart.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './menu-detail.html',
  styleUrls: ['./menu-detail.css']
})
export class MenuDetail implements OnInit {

  item?: MenuItem;

  constructor(
    private cartService: CartService,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = parseInt(idParam, 10);
      this.menuService.getItemById(id).subscribe(menuItem => {
        this.item = menuItem;
      });
    }
  }

  addToCart(item: MenuItem): void {
    this.cartService.addToCart(item);
    this.snackBar.open(`${item.name} added to cart`, 'Close', {
      duration: 3000
    });
  }
}
