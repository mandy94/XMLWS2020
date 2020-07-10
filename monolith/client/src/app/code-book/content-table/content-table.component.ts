import { Component, OnInit, Input } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';
import { MatDialog } from '@angular/material';
import { EditItemDialogComponent } from './edit-item-dialog/edit-item-dialog.component';



@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit {
  @Input()  typeNames: string;  
  @Input() serverUrl:string;
  
  ENTITY_DATA : any;  
  displayedColumns: string[] = [ 'name', 'action'];
  codebookTitle: string;
  dataSource:any;
  newItem:string;
  constructor(private apiSevice:ApiService, private config: ConfigService,public dialog: MatDialog
    ) { }
  
  ngOnInit() {
    this.codebookTitle = "Sifrarnici za "+ this.typeNames;        
    
    this.apiSevice.get(this.config.codebook_url + this.serverUrl + "/all")
          .subscribe(data=>{
            this.refreshTablesWith(data);         
        
          })
    
  }
edit(element){
  const dialogRef = this.dialog.open(EditItemDialogComponent, {
  width: '250px',
  data: element
});

  dialogRef.afterClosed().subscribe(result => {  
   
    this.apiSevice.put(this.config.codebook_url + this.serverUrl + "/edit/" + result.id, result.title).subscribe(data => this.refreshTablesWith(data));
  });
}

  delete(id:number){    
      this.apiSevice.delete(this.config.codebook_url+ this.serverUrl+ "/delete/" + id).subscribe(data => this.refreshTablesWith(data) );
  }
 
  create(){    
    this.apiSevice.post(this.config.codebook_url+this.serverUrl+"/create", this.newItem).subscribe(data => this.refreshTablesWith(data));
    this.newItem = "";
  }
  refreshTablesWith(data){
    this.ENTITY_DATA = data;
    this.dataSource = this.ENTITY_DATA;;
  }
}
