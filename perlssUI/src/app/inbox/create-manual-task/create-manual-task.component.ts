import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AssignUserComponent} from '../assign-user/assign-user.component';

@Component({
  selector: 'app-create-manual-task',
  templateUrl: './create-manual-task.component.html',
  styleUrls: ['./create-manual-task.component.scss']
})
export class CreateManualTaskComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  showAssignUserDialog() {
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.minWidth = '800px';
    dialogConfig.minHeight = '405px';
    dialogConfig.panelClass = 'edit-profile-container';
    this.matDialog.open(AssignUserComponent, dialogConfig);
  }

}
