import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';

@Component({
  selector: 'app-manage-user-profiles',
  templateUrl: './manage-user-profiles.component.html',
  styleUrls: ['./manage-user-profiles.component.scss']
})
export class ManageUserProfilesComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  editUserProfileDialog() {
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.minWidth = '850px';
    dialogConfig.panelClass = 'dialog-container';
    this.matDialog.open(EditUserProfileComponent, dialogConfig);
  }

  openDialog() {
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.minHeight = '350px';
    dialogConfig.minWidth = '850px';
    this.matDialog.open(ViewUserProfileComponent,dialogConfig);
  }

}
