import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfigService, ApiService } from 'app/service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'app/shared/models/models';
import { YesNoDialogComponent } from 'app/yes-no-dialog/yes-no-dialog.component';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-edit-permissions-dialog',
  templateUrl: './edit-permissions-dialog.component.html',
  styleUrls: ['./edit-permissions-dialog.component.css']
})
export class EditPermissionsDialogComponent implements OnInit {

  constructor(private apiSevice: ApiService,
    private config: ConfigService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<EditPermissionsDialogComponent>,
    formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data) { 


    }
    
    permissionToUpload;
    permissionToLoggin;
    permissionToSomethingElse;
    allPermisions;
  ngOnInit() {
  this.apiSevice.get(this.config.get_user_permission_config(this.data.user.id)).subscribe((data => this.allPermisions = data));
  }

  submit(e){
  //   const dialogRef = this.dialog.open(YesNoDialogComponent, {
  //     width: '400px',
  //     data: { displayedText:"Da li ste sigurno da ovo zelite?"}
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {    
      
      
  //   });
    this.apiSevice.put(this.config.get_update_permisions(this.data.user.id), this.allPermisions).subscribe();
    
  }
}
