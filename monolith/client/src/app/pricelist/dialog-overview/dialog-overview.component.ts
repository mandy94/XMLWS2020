import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PricelistInterface } from 'app/shared/models/advert';
import { ApiService, ConfigService } from 'app/service';


@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',  
  styleUrls: ['./dialog-newpricelist.css']
})
export class DialogOverviewComponent{

  constructor(
    private apiService:ApiService,
    private config:ConfigService,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PricelistInterface) {
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
update(data){
  console.log(data);
  this.apiService.put(this.config.update_pricelist_url, data).subscribe();
}



}
