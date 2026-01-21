import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: MenuItem[] = [
    { id: 1, name: 'Pizza', description: 'Cheese pizza', price: 250, category: 'Main' },
    { id: 2, name: 'Burger', description: 'Veg burger', price: 120, category: 'Main' },
    { id: 3, name: 'Pasta', description: 'White sauce pasta', price: 200, category: 'Main' },
    { id: 4, name: 'Ice Cream', description: 'Vanilla scoop', price: 80, category: 'Dessert' }
  ];

  getMenu(): MenuItem[] {
    return this.menu;
  }

  getItemById(id: number): MenuItem | undefined {
    return this.menu.find(item => item.id === id);
  }
}
