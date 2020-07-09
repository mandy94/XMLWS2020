import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-item-dialog',
  templateUrl: './edit-item-dialog.component.html',  
})
export class EditItemDialogComponent {

constructor(
  public dialogRef: MatDialogRef<EditItemDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: {}) {}

onNoClick(): void {
  this.dialogRef.close();
}
}
