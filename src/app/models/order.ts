export interface OrderItem {
  menuItemId: number;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id?: number;
  customerName: string;
  customerPhone?: string;
  customerEmail?: string;
  items: OrderItem[];
  total: number;
  createdAt?: string;
  status?: 'placed' | 'preparing' | 'completed' | 'cancelled';
}