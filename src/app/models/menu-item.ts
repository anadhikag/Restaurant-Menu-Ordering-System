export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  ingredients?: string[];
  price: number;
  category: string;
  image?: string;
  available?: boolean;
}
