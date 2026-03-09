import { MenuItem } from './menu-item.model';
import { Customer } from './customer.model';

export interface Order {
  id?: string | number;
  items: MenuItem[];
  totalAmount: number;
  customer: Customer;
}
