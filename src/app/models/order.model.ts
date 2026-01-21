import { MenuItem } from './menu-item.model';
import { Customer } from './customer.model';

export interface Order {
  items: MenuItem[];
  totalAmount: number;
  customer: Customer;
}
