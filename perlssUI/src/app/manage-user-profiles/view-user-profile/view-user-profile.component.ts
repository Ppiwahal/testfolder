import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import * as ViewUserProfileDetail from '../../../assets/data/view-userProfile.json';

interface ViewProfileDetail {
  id: 0,
  archiveDt: string,
  classificationCd: string,
  createDt: string,
  createUserId: string,
  deprovisionedDt: string,
  email: string,
  firstName: string,
  lastLoginDt: string,
  lastModifiedBy: string,
  lastModifiedDt: string,
  lastName: string,
  entityId: 0,
  userRoles: [],
  userMangedRoles: string,
  mi: string,
  phone: string,
  provisionedDt: string,
  createdDt: string,
  recordVersion: string,
  regionCd: string,
  statusCd: string,
  sufName: string,
  userId: 0
}

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.scss']
})

export class ViewUserProfileComponent implements OnInit {
  data:ViewProfileDetail;
  userRole:[];
  constructor(public dialogRef: MatDialogRef<ViewUserProfileComponent>) { }

  close() {
  	this.dialogRef.close();
  }

  ngOnInit(): void {
    this.data = JSON.parse(JSON.stringify(ViewUserProfileDetail))['default'];
    this.userRole = this.data.userRoles;
    //console.log(this.data.userRoles);
  }

}
