import { Component, OnInit, Input } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';



@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit {
  @Input()  ENTITY_DATA : any;  
  @Input()  typeNames: string;  
  @Input() serverUrl:string;
  
  displayedColumns: string[] = [ 'name', 'action'];
  codebookTitle: string;
  dataSource:any;
  newItem:string;
  constructor(private apiSevice:ApiService, private config: ConfigService) { }
  
  ngOnInit() {
    this.codebookTitle = "Sifrarnici za "+ this.typeNames;    
    this.dataSource = this.ENTITY_DATA;
  }
edit(){}

  delete(id:number){    
      this.apiSevice.delete(this.config.codebook_url+ this.serverUrl+ "/delete/" + id).subscribe((data) => this.refreshTablesWith(data) );
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
