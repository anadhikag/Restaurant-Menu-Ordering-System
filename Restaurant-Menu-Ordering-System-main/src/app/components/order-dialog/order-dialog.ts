import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-order-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './order-dialog.html',
  styleUrls: ['./order-dialog.css']
})
export class OrderDialog {

  constructor(
    public dialogRef: MatDialogRef<OrderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { orderId: string | number }
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
