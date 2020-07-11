import { Component, OnInit, Inject } from '@angular/core';
import { Pricelist, PricelistInterface } from 'app/shared/models/advert';
import { MatDialog} from '@angular/material';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { ApiCardComponent } from 'app/component';
import { ApiService, ConfigService } from 'app/service';
import { DialogNewpricelistComponent } from './dialog-newpricelist/dialog-newpricelist.component';
import { tick } from '@angular/core/src/render3';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css']
})

export class PricelistComponent implements OnInit {
  
 // vals
 my_bonuses: any;
  constructor(public dialog: MatDialog,
              private apiSrvice: ApiService,
              private config : ConfigService) {
              
              }
 

  getBonuses(){
    this.apiSrvice.get(this.config.my_bonuses_url).subscribe(data => this.my_bonuses);    
  }            
  openCreateDialog():void{
    this.getBonuses();
    const  createDialog =  this.dialog.open(DialogNewpricelistComponent, {
      width: '550px',      

      
    });
    createDialog.afterClosed().subscribe(result => {
      this.loadPriceList(); 
    });
  }

  openUpdateDialog(target: PricelistInterface): void {  
    const updateDialog = this.dialog.open(DialogOverviewComponent, {
      width: '550px',      
      data : target
    });
    
    updateDialog.afterClosed().subscribe(result => {
      this.loadPriceList(); 
      
    });  
    
  }

  displayedColumns: any;
  dataSource:any;
  private dataLoaded: boolean;  

  ngOnInit() {
   this.loadPriceList();    
   this.getBonuses();
  }

  hasPricelists(){
    return this.dataLoaded;
  }
 delete(id:number){
    this.apiSrvice.delete(this.config.pricelist_url+'/' + id)
                  .subscribe((data) =>{
                    console.log( data);
                    if(data.length != 0)                  
                      this.refreshTableWith(data);
                    else                    
                      this.dataLoaded = false;
                  });
  }
  
loadPriceList(){
  this.apiSrvice.get(this.config.my_pricelist_url)
                .subscribe((data) =>{
                  this.displayedColumns = ['id', 'name','pricePerDay', 'pricePerKm','cdw','bonus', 'actions'];                    
                  if(data.length != 0 ){
                    this.dataLoaded = true;                    
                    this.refreshTableWith(data);
                  }
                });
}

refreshTableWith(data){
  const PRICELIST_TABLE:PricelistInterface[]= data;         
  this.dataSource = PRICELIST_TABLE;
}
}
