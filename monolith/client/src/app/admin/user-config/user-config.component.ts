import { Component, OnInit } from '@angular/core';
import { ConfigService, ApiService } from 'app/service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { YesNoDialogComponent } from 'app/yes-no-dialog/yes-no-dialog.component';
import { EditPermissionsDialogComponent } from './edit-permissions-dialog/edit-permissions-dialog.component';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.css']
})
export class UserConfigComponent implements OnInit {

  constructor(private apiSevice:ApiService,
              private config: ConfigService,
              public dialog: MatDialog) { }
  displayedColumns: string[] = ['id','fullName', 'email', 'username', 'status','role','edit','auth'];
  dataSource: any;

  ngOnInit() {
    this.apiSevice.get(this.config.users_url)
    .subscribe(data => {
      this.dataSource = data
      
    })
  }
  showEditUserDialog(user){
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '400px',
      data: {user:  JSON.parse(JSON.stringify(user))} // deep copy passed
    });
  
    dialogRef.afterClosed().subscribe(result => {    
      this.apiSevice.get(this.config.users_url)
      .subscribe(data => {
        this.dataSource = data
        
      })
    });
  }
  showAuthDialog(user){     
    const dialogRef = this.dialog.open(EditPermissionsDialogComponent, {
    width: '700px',
    data: {user:  JSON.parse(JSON.stringify(user))} // deep copy passed
  });

  dialogRef.afterClosed().subscribe(result => {    
    // this.apiSevice.get(this.config.users_url)
    // .subscribe(data => {
    //   this.dataSource = data
      
    // })
  });
}

}
