import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import {  PricelistInterface, Pricelist } from 'app/shared/models/advert';
import { ApiService, ConfigService } from 'app/service';
import { BonusInterface } from '../pricelist.component';

@Component({
  selector: 'app-dialog-newbonus',
  templateUrl: './dialog-newbonus.component.html',
  styleUrls: ['./dialog-newbonus.component.css']
})
export class DialogNewbonusComponent  {

  value=0;
  constructor(
    private apiService:ApiService,
    private config:ConfigService,
    public dialogRef: MatDialogRef<DialogNewbonusComponent>,
   ) {
   
     
   }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  
  create(newObj:any){  
  
    this.apiService.post(this.config.new_bonus_url, newObj).subscribe();
    this.dialogRef.close();
  }

}
