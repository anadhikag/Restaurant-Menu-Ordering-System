import { Routes } from '@angular/router';
import { MenuList } from './components/menu-list/menu-list';
import { Cart } from './components/cart/cart';
import { MenuDetail } from './components/menu-detail/menu-detail';
import { OrderForm } from './components/order-form/order-form';

export const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuList },
  { path: 'menu/:id', component: MenuDetail },
  { path: 'cart', component: Cart },
   { path: 'order', component: OrderForm } 
];
