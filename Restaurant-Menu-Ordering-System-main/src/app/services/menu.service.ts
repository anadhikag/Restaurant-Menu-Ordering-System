import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://localhost:3000/menu';
  private cachedMenu: MenuItem[] = [];

  constructor(private http: HttpClient) {}

  getMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl).pipe(
      tap(items => this.cachedMenu = items),
      catchError(this.handleError<MenuItem[]>('getMenu', []))
    );
  }

  // alias (helps menu-list)
  getMenuItems(): Observable<MenuItem[]> {
    return this.getMenu();
  }

  getItemById(id: number): Observable<MenuItem | undefined> {
    const cachedItem = this.cachedMenu.find(item => item.id === id);
    if (cachedItem) {
      return of(cachedItem);
    }
    return this.http.get<MenuItem>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError<MenuItem>(`getItemById id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // return empty valid result so app keeps running. The interceptor handles showing UI warnings.
      return of(result as T);
    };
  }
}
