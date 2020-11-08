import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserProfileService} from '../services/user-profile.service';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {

  editUserProfileForm: FormGroup;
  userProfile: any;
  userRolesItems = [
    {id: 1, name: 'LTSS Supervisor'},
    {id: 2, name: 'LTSS Administrator'},
    {id: 3, name: 'LTSS Administration1'},
    {id: 4, name: 'LTSS Administration2'},
    {id: 5, name: 'LTSS Administration3'},
    {id: 6, name: 'LTSS Administration4'},
    {id: 7, name: 'LTSS Administration5'},
    {id: 8, name: 'LTSS Administration6'},
  ];

  ManagedRolesItems = [
    {id: 1, name: 'Appeals Workers'},
    {id: 2, name: 'PAE-Workers'},
    {id: 3, name: 'Appeals Workers1'},
    {id: 4, name: 'PAE - Worker1'},
    {id: 5, name: 'Appeals Workers2'},
    {id: 6, name: 'PAE - Worker2'},
    {id: 7, name: 'Appeals Workers3'},
    {id: 8, name: 'PAE - Worker3'},
  ];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditUserProfileComponent>, private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.editUserProfileForm = this.fb.group({
      userRoles:  ['', [Validators.required]],
      classification:  ['', [Validators.required]],
      region:  ['', [Validators.required]],
      managedUserRoles: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
    //MOCK
    const userId = 'admin';
    const entityCd = 'DIDA';
    this.userProfileService.getUserProfile(userId, entityCd).subscribe(res => {
      this.userProfile = res;
      const selectedRolesList = this.userProfile.entityDetails[0].userRoleList;
      const selectedRoleItems = this.userRolesItems.filter(roleItem => selectedRolesList.indexOf(roleItem.name) !== -1);
      const selectedManageRoleList  =  this.userProfile.entityDetails[0].userManagedRoleList;
      const selectedManageRoleItems = this.ManagedRolesItems.filter(managedRoleItem => selectedManageRoleList.indexOf(managedRoleItem.name) !== -1);
      this.editUserProfileForm.patchValue({
        userRoles: selectedRoleItems,
        classification: this.userProfile.entityDetails[0].classificationCd,
        region: this.userProfile.regioncd,
        managedUserRoles: selectedManageRoleItems,
        status:  this.userProfile.entityDetails[0].status
      });
    })

  }

  close() {
  	this.dialogRef.close();
  }

  editUserProfile() {
    console.log("editUserProfile");
    if(this.editUserProfileForm.invalid) {
      return;
    }
    let payload = {
      "classificationCd": this.f.classification.value,
      "regionCd": this.f.region.value,
      "statusCd": this.f.status.value,
      "userId": "",
      "userMangedRoles": this.f.managedUserRoles.value,
      "userRoles": this.f.userRoles.value
    }
    if(this.userProfile.entityDetails && this.userProfile.entityDetails.length > 0 &&  this.userProfile.entityDetails[0].completeSw === 'N') {
      payload["completeSw"] = 'N';
    }
    this.userProfileService.saveUserProfile(payload).subscribe(res => {
      console.log(res);
      this.close();
    });
  }

  get f() { return this.editUserProfileForm.controls; }
}
