import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {InboxService} from '../services/inbox.service';

export interface UserRoleDetail {
  entityCd: string;
  firstName: string;
  lastName: string;
  roleName: string;
  sufName: string;
  userId: string;
}

@Component({
  selector: 'app-assign-user',
  templateUrl: './assign-user.component.html',
  styleUrls: ['./assign-user.component.scss']
})
export class AssignUserComponent implements OnInit {
  displayedColumns: string[] = ['firstName','userId', 'entityCd','roleName'];
  dataSource: MatTableDataSource<UserRoleDetail>;
  selectedRow:any;

  @Input() displayMode;

  constructor(public dialogRef: MatDialogRef<AssignUserComponent>, private inboxService: InboxService) { }

  ngOnInit(): void {
    //MOCK
    const teamMasterId = 1;
    this.inboxService.getAssignTaskDetails(teamMasterId).subscribe((res: UserRoleDetail[]) => {
      console.log("res ", res);
      this.dataSource = new MatTableDataSource(res);
    });
  }

  selectRow(row) {
    this.selectedRow = row;
  }


  assignTask() {
    console.log("selectedRow ", this.selectedRow);
  }

  close() {
  	this.dialogRef.close();
  }

  filterUsers(userName: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reassignTask() {
    //MOCK
    const taskId = 1;
    const assignedUserId='dcu3304';
    const entityId=12;
    this.inboxService.reassignTask(taskId, assignedUserId, entityId).subscribe(res =>
      console.log("res ", res));
  }


  sendBackToQueue() {
    //MOCK
    const taskId = 11;
    this.inboxService.sendBackToQueue(taskId).subscribe(res =>
    console.log("res ", res));
  }
}
