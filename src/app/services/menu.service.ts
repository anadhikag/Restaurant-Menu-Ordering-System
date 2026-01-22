import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: MenuItem[] = [
  {
    id: 1,
    name: 'Pizza',
    description: 'Cheese pizza',
    price: 250,
    category: 'Main',
    imageUrl: 'assets/images/pizza.jpeg'
  },
  {
    id: 2,
    name: 'Burger',
    description: 'Veg burger',
    price: 120,
    category: 'Main',
    imageUrl: 'assets/images/burger.jpeg'
  },
  {
    id: 3,
    name: 'Pasta',
    description: 'White sauce pasta',
    price: 200,
    category: 'Main',
    imageUrl: 'assets/images/pasta.jpeg'
  },
  {
    id: 4,
    name: 'Ice Cream',
    description: 'Vanilla scoop',
    price: 80,
    category: 'Dessert',
    imageUrl: 'assets/images/icecream.jpeg'
  }
];

  getMenu(): MenuItem[] {
    return this.menu;
  }

  // alias (helps menu-list)
  getMenuItems(): MenuItem[] {
    return this.menu;
  }

  getItemById(id: number): MenuItem | undefined {
    return this.menu.find(item => item.id === id);
  }
}
