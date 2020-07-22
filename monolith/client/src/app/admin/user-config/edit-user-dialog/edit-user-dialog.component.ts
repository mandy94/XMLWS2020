import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfigService, ApiService } from 'app/service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent {

    constructor(private apiSevice:ApiService,
      private config: ConfigService,
      public dialogRef: MatDialogRef<EditUserDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data) {}
  
      authorities = new FormControl();
      authList = ['Agencija', 'Korisnik', 'Administrator'];

    onNoClick(): void {
      this.dialogRef.close();
    }
    
    activate(id:number){
      this.apiSevice.put(this.config.user_url + "/activate", id).subscribe(()=>{
        this.data.user.status= 'ACTIVE';
      });
    }
    block(id:number){
      this.apiSevice.put(this.config.user_url + "/block", id).subscribe(()=>this.data.user.status= 'BLOCK');
    }
    
}
