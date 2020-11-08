import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManageUserRolesComponent} from './manage-user-roles.component';
import {AppMaterialModule} from '../_shared/app-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ManageViewUserRolesComponent } from './manage-view-user-roles/manage-view-user-roles.component';
import { CreateEditUserRolesComponent } from './create-edit-user-roles/create-edit-user-roles.component';
import { UserRolesTableComponent } from './user-roles-table/user-roles-table.component';
@NgModule({
  declarations: [
    ManageUserRolesComponent, 
    ManageViewUserRolesComponent, 
    CreateEditUserRolesComponent, 
    UserRolesTableComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class ManageUserRolesModule { }
