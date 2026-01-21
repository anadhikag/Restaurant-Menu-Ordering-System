import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-detail.html'
})
export class MenuDetail implements OnInit {
  item?: MenuItem;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.menuService.getItemById(id);
  }

  addToCart() {
    if (this.item) this.cartService.addToCart(this.item);
  }
}
