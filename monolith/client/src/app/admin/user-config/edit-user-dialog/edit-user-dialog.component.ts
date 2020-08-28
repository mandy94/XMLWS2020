import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfigService, ApiService } from 'app/service';
import { FormControl } from '@angular/forms';
import { User } from 'app/shared/models/models';
import { YesNoDialogComponent } from 'app/yes-no-dialog/yes-no-dialog.component';
@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent {

  constructor(private apiSevice: ApiService,
    private config: ConfigService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  authorities = new FormControl();
  authList = ['Agencija', 'Korisnik', 'Administrator'];
  canPost = true;
  changed = false;
  newUserData = this.data.user;
  editUserConfig = new FormControl();


  hasChanged() {
    
    this.changed = true;    

  }
  update() {
    this.newUserData.id = this.data.user.id;
    this.apiSevice.put(this.config.update_user_url, this.newUserData).subscribe();
  }
  
  delete(id: number) {
   
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '400px',
      
      data: {
        displayedText: "Da li ste sigurni da zelite da obrisete korisnika? Brisanjem korisnika brisete i sve oglase i zahteve koje je imao?",
        textType: "warn"
      } 
    });

    dialogRef.afterClosed().subscribe(allowed => {
      if (allowed)
        {this.apiSevice.delete(this.config.user_url + "/" + id).subscribe();        
        this.dialogRef.close();}
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
