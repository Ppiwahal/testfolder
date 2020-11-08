import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {DisplayMode} from '../../_shared/utility/DisplayMode';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserRolesService} from '../services/user-roles.service';
import {UserRoleDetail} from '../../_shared/model/UserRoleDetail';

const FORM_DEFAULTS = {
  entityType: 'MCO',
  entityCd: 'UNT',
  roleName: '0',
  status: 'A'
}

@Component({
  selector: 'app-create-edit-user-roles',
  templateUrl: './create-edit-user-roles.component.html',
  styleUrls: ['./create-edit-user-roles.component.scss']
})
export class CreateEditUserRolesComponent implements OnInit {

  @Input() displayMode: DisplayMode;
  @Input() selectedRow: any;
  userRoleForm: FormGroup;
  statusOptions: any[];

  constructor(private fb: FormBuilder, private userRolesService: UserRolesService) { }

  ngOnInit(): void {
    console.log("this.selected row ", this.selectedRow);
    this.loadFormValues();
    this.getStatusValues();
  }

  getStatusValues() {
    this.userRolesService.getStatusValues().subscribe(res => {
        this.statusOptions = res;
        this.f.status.setValue(this.statusOptions[0].code);
    });
  }

  loadFormValues() {
    const idDisabled = this.displayMode === 'EDIT';
    const selectedRow = this.selectedRow ? this.selectedRow : FORM_DEFAULTS;
    console.log("thi.selected row ", this.selectedRow);
    this.userRoleForm = this.fb.group({
      entityType: [{value:selectedRow.entityType, disabled: idDisabled}, [Validators.required]],
      entity: [{value:selectedRow.entityCd, disabled: idDisabled},[Validators.required]],
      userRoleName: [selectedRow.roleName,[Validators.required]],
      status: ['',[Validators.required]]
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    if(changes['selectedRow']) {
      this.loadFormValues();
    }
  }


  get f() { return this.userRoleForm.controls; }


  saveOrEditUserRole() {
    if (this.userRoleForm.invalid) {
      return;
    }
    let payload = {
      "userId":"dcu8487",
      "entityCd":this.f.entity.value,
      "entityType": this.f.entityType.value,
      "roleName":this.f.userRoleName.value,
      "roleStatusCd": this.f.status.value
    }
    if(this.displayMode === 'CREATE') {
      this.userRolesService.createUserRole(payload).subscribe(res =>
        console.log(res));
    } else {
      this.userRolesService.editUserRole(payload).subscribe(res =>
      console.log(res));
    }
  }

}
