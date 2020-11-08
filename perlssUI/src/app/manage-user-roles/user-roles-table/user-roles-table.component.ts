import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ManageViewUserRolesComponent} from '../manage-view-user-roles/manage-view-user-roles.component';
import {UserRolesService} from '../services/user-roles.service';
import {UserRoleDetail} from '../../_shared/model/UserRoleDetail';

@Component({
  selector: 'app-user-roles-table',
  templateUrl: './user-roles-table.component.html',
  styleUrls: ['./user-roles-table.component.scss']
})
export class UserRolesTableComponent implements OnInit {

  displayedColumns: string[] = ['entityName', 'roleName', 'regionCd', 'lastModifiedDt', 'roleStatusCd', 'actions'];
  dataSource: MatTableDataSource<UserRoleDetail>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() showOnlyActive: boolean;
  @Output() emitRolesCount = new EventEmitter();
  @Output() emitUserRoleEditMode = new EventEmitter<any>();

  constructor(private matDialog: MatDialog, private userRoleService: UserRolesService) {
  }

  ngOnInit(): void {
    // MOCK
    const userId = 'dcu8487';
    const entityCode = 'AME';
    this.userRoleService.getUserRoles(userId, entityCode).subscribe(res => {
      console.log("response ",res);
      //MOCK
      //res = [{entityName: 'entityName1', roleStatusCd:'A'},{entityName: 'entityName2', roleStatusCd : 'I'}]
      if(res && res.length > 0 && !res[0].errorCode) {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
        const activeRolesCount = this.dataSource.data.filter(userRole => userRole.roleStatusCd === 'A').length;
        this.emitRolesCount.emit(activeRolesCount);
      } else {
        this.dataSource = new MatTableDataSource([]);
      }
    });

  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['showOnlyActive'] && this.showOnlyActive && this.dataSource.data) {
      this.dataSource.data = this.dataSource.data.filter(userRole => userRole.roleStatusCd === 'A');
    }

  }


  viewUserProfileDialog(row: UserRoleDetail) {
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.minWidth = '825px';
    dialogConfig.data = {
      "selectedRow" : row,
      "roleId": row.roleId
    }
    this.matDialog.open(ManageViewUserRolesComponent, dialogConfig);
  }

  editUserRole(row: UserRoleDetail) {
    this.emitUserRoleEditMode.emit({rowData: row});
  }

}
