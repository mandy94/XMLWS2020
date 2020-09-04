import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-statistic-data-dialog',
  templateUrl: './new-statistic-data-dialog.component.html',
  styleUrls: ['./new-statistic-data-dialog.component.css']
})
export class NewStatisticDataDialogComponent{

  constructor(  public dialogRef: MatDialogRef<NewStatisticDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


    dataFormControl = new FormControl('');

    submitReport(){
      this.data.milage = this.dataFormControl.value;
      this.dialogRef.close(this.dataFormControl.value);
    }
  
 

}
