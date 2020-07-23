import { Component, OnInit } from '@angular/core';
import { ConfigService, ApiService } from 'app/service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { YesNoDialogComponent } from 'app/yes-no-dialog/yes-no-dialog.component';

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
      
    })
  }
  updatePermision(){
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '300px',
      height: '350px',
      data: "Da li ste igurno da ovo zelite?"
    });
  
    dialogRef.afterClosed().subscribe(result => {    
      
    });
  }
  showAuthDialog(user){     
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
    width: '500px',
    height: '650px',
    data: {user: user}
  });

  dialogRef.afterClosed().subscribe(result => {    
    
  });
}

}
