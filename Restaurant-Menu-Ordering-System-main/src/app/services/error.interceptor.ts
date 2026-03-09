import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  return next(req).pipe(
    catchError((error) => {
      console.error('API Error:', error);
      snackBar.open('An error occurred while fetching data from the server. Please try again later.', 'Close', {
        duration: 5000,
        panelClass: ['error-snackbar']
      });
      return throwError(() => error);
    })
  );
};
