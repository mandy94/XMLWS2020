import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {  DialogMessage } from 'app/shared/models/display-message';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.css']
})
export class YesNoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<YesNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogMessage) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  yes(){
    
    this.dialogRef.close(true);
    
  }
  no(){
    
    this.dialogRef.close(false);
  }
}
