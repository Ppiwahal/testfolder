import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserRoleDetail} from '../../_shared/model/UserRoleDetail';
import {UserRolesService} from '../services/user-roles.service';

@Component({
  selector: 'app-manage-view-user-roles',
  templateUrl: './manage-view-user-roles.component.html',
  styleUrls: ['./manage-view-user-roles.component.scss']
})
export class ManageViewUserRolesComponent implements OnInit {

  userRoleDetails: any;

  constructor(public dialogRef: MatDialogRef<ManageViewUserRolesComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private userRoleService : UserRolesService) { }

  ngOnInit(): void {
    this.userRoleService.getUserRoleDetailsByRoleId(this.data.roleId).subscribe(res => {
        this.userRoleDetails = res;
        console.log("userRoleDetails ", this.userRoleDetails);
    }
    )
  }

  close() {
  	this.dialogRef.close();
  }


}
