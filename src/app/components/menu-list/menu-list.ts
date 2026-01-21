import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-list.html'
})
export class MenuList implements OnInit {
  menu: MenuItem[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menu = this.menuService.getMenu();
  }
}
