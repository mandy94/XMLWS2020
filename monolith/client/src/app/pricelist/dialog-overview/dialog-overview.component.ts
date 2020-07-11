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
      this.getBonuses();
    }
  
  onNoClick(): void {
    this.dialogRef.close();
  } 
  
  my_bonuses:any;
  getBonuses(){
   this.apiService.get(this.config.my_bonuses_url).subscribe(data => this.my_bonuses = data);    
 } 
  
update(data){
  console.log(data);
  this.apiService.put(this.config.update_pricelist_url, data).subscribe();
  this.dialogRef.close();
}



}
