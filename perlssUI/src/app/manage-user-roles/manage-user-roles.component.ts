import { Component, OnInit } from '@angular/core';
import {DisplayMode} from '../_shared/utility/DisplayMode';
import {UserRoleDetail} from '../_shared/model/UserRoleDetail';

@Component({
  selector: 'app-manage-user-roles',
  templateUrl: './manage-user-roles.component.html',
  styleUrls: ['./manage-user-roles.component.scss']
})
export class ManageUserRolesComponent implements OnInit {

  rolesCount: number = 0;
  showUserRoleScreen: boolean = false;
  displayMode: DisplayMode;
  selectedRow: UserRoleDetail = null;
  showOnlyActive: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showActiveRecords() {
    this.showOnlyActive = true;
  }

  createUserRole() {
    this.showUserRoleScreen = true;
    this.displayMode = DisplayMode.CREATE;
    this.selectedRow = null;
  }

  editUserRole(event) {
    this.showUserRoleScreen = true;
    this.displayMode = DisplayMode.EDIT;
    this.selectedRow = event.rowData;
  }
}
