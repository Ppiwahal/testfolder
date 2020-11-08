import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {AssignUserComponent} from './assign-user/assign-user.component';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  taskCount: number =0;
  notificationCount: number =0;
  load:any;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.load = true;
  }
  
  assignPopupDialog() {
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.minWidth = '450px';
    dialogConfig.minHeight = '405px';
    dialogConfig.panelClass = 'edit-profile-container';
    this.matDialog.open(AssignUserComponent, dialogConfig);
  }

}
