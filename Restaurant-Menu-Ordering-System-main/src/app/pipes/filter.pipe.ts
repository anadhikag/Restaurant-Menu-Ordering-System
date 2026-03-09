import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: MenuItem[], searchText: string): MenuItem[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText) || 
             it.category.toLowerCase().includes(searchText);
    });
  }
}
