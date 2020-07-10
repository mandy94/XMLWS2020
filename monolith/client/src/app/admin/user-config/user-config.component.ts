import { Component, OnInit } from '@angular/core';
import { ConfigService, ApiService } from 'app/service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.css']
})
export class UserConfigComponent implements OnInit {

  constructor(private apiSevice:ApiService,
              private config: ConfigService,
              public dialog: MatDialog) { }
  displayedColumns: string[] = ['id','fullName', 'email', 'username', 'status','role','auth'];
  dataSource: any;

  ngOnInit() {
    this.apiSevice.get(this.config.users_url)
    .subscribe(data => {
      this.dataSource = data
      console.log(data);
    })
  }
 
  showAuthDialog(user){ 
    console.log(user);
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
    width: '450px',
    data: {user: user}
  });

  dialogRef.afterClosed().subscribe(result => {    
    // this.animal = result;
  });
}
activate(id:number){
  this.apiSevice.put(this.config.user_url + "/activate", id).subscribe(data => this.dataSource = data);
}
block(id:number){
  this.apiSevice.put(this.config.user_url + "/block", id).subscribe(data => this.dataSource = data);
}

}
