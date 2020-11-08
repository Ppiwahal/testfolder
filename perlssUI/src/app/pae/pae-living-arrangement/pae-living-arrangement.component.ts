import { PaeCommonService } from './../../core/services/pae/pae-common/pae-common.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomvalidationService } from '../../_shared/utility/customvalidation.service';
import {SavePopupComponent} from '../../savePopup/savePopup.component';
import * as customValidation from '../../_shared/constants/validation.constants';
import { constrainPoint } from '@fullcalendar/angular';

@Component({
  selector: 'app-pae-living-arrangement',
  templateUrl: './pae-living-arrangement.component.html',
  styleUrls: ['./pae-living-arrangement.component.scss']
})
export class PaeLivingArrangementComponent implements OnInit {
  livingArrangementForm: FormGroup;
  livingArrangementList = [
    {
        code: 'LTC',
        value: 'Long-term care facility — e.g., nursing home, ICF',
        activateSW: 'Y'
    },
    {
        code: 'HJC',
        value: 'Harold Jordan Center',
        activateSW: 'Y'
    },
    {
        code: 'MEN',
        value: 'Mental health residence---behavioral health group home',
        activateSW: 'Y'
    },
    {
        code: 'HOM',
        value: 'Family member’s home/own home',
        activateSW: 'Y'
    },
    {
        code: 'NON',
        value: 'Living with non-relative e.g. apartment or house with friend or roommate(s)',
        activateSW: 'Y'
    },
    {
        code: 'JAL',
        value: 'Jail',
        activateSW: 'Y'
    },
    {
        code: 'FOS',
        value: 'Foster Home',
        activateSW: 'Y'
    },
    {
        code: 'MED',
        value: 'Medical Hospital',
        activateSW: 'Y'
    },
    {
        code: 'SHL',
        value: 'Homeless/Shelter ',
        activateSW: 'Y'
    },
    {
        code: 'HLS',
        value: 'Psychiatric hospital or unit',
        activateSW: 'Y'
    },
    {
        code: 'RMH',
        value: 'Regional Mental Health Institute',
        activateSW: 'Y'
    },
    {
        code: 'RTC',
        value: 'Residential Treatment Center for youth',
        activateSW: 'Y'
    },
    {
        code: 'SCH',
        value: 'Specialized school — e.g., school for deaf, blind',
        activateSW: 'Y'
    },
    {
        code: 'OTH',
        value: 'Other',
        activateSW: 'Y'
    }
];

kblivingArrangementList = [
  {
      code: 'LT',
      value: 'Long-term care facility — e.g., nursing home ',
      activateSW: 'Y'
  },
  {
      code: 'ME',
      value: 'Mental health residence — e.g., psychiatric group home',
      activateSW: 'Y'
  },
  {
      code: 'PS',
      value: 'Psychiatric hospital or unit',
      activateSW: 'Y'
  },
  {
      code: 'IN',
      value: 'Group home for children / youths with intellectual disability',
      activateSW: 'Y'
  },
  {
      code: 'PH',
      value: 'Group home for children / youth with physical disability',
      activateSW: 'Y'
  },
  {
      code: 'SC',
      value: 'Specialized school — e.g., school for deaf, blind',
      activateSW: 'Y'
  },
  {
      code: 'HO',
      value: 'Home',
      activateSW: 'Y'
  },
  {
      code: 'OT',
      value: 'Other',
      activateSW: 'Y'
  }
];
facilityNameList = [
  {
      code: 'MUR',
      value: 'Mur-Ci Homes, Inc.',
      activateSW: 'Y'
  },
  {
     code: 'OGA',
      value: 'Orange Grove Center 3400 Chandler Avenue',
      activateSW: 'Y'
  },
  {
      code: 'OGB',
      value: 'Orange Grove Center 3406 Chandler Avenue',
      activateSW: 'Y'
  },
  {
      code: 'BRA',
      value: 'Bradley/Cleveland Services, Inc., Site A between 183 and 217,  Kile Lake Road, SE',
      activateSW: 'Y'
  },
  {
      code: 'BRB',
      value: 'Bradley/Cleveland Services, Inc., Site B between 183 and 217,  Kile Lake Road, SE',
      activateSW: 'Y'
  },
  {
      code: 'TFA',
      value: 'Tennessee Family Solutions, Inc. 722-724 Stone Trace Drive',
      activateSW: 'Y'
  },
  {
      code: 'TFB',
      value: 'Tennessee Family Solutions, Inc. 1502-1504 Rochester Drive',
      activateSW: 'Y'
  },
  {
      code: 'TFC',
      value: 'Tennessee Family Solutions, Inc. 1727-1729 Thomas Court',
      activateSW: 'Y'
  },
  {
      code: 'TFD',
      value: 'Tennessee Family Solutions, Inc. 1432-1434 Rochester Drive',
      activateSW: 'Y'
  },
  {
      code: 'COA',
      value: 'Comcare, Inc.',
      activateSW: 'Y'
  },
  {
      code: 'COB',
      value: 'Comcare, Inc. ',
      activateSW: 'Y'
  },
  {
      code: 'COC',
      value: 'Comcare, Inc. ',
      activateSW: 'Y'
  },
  {
      code: 'MDC',
      value: 'Michael Dunn Center ',
      activateSW: 'Y'
  },
  {
      code: 'SCT',
      value: 'Sunrise Community of Tennessee ',
      activateSW: 'Y'
  },
  {
      code: 'OAG',
      value: 'Open Arms Care Corporation dba Greeneville #1 Chuckey Pike ',
      activateSW: 'Y'
  },
  {
      code: 'OAH',
      value: 'Open Arms Care Corporation dba Hamilton County #2 Gamble Road - Southwest',
      activateSW: 'Y'
  },
  {
      code: 'OAC',
      value: 'Open Arms Care Corporation dba Greeneville #3 East Church Street - East ',
      activateSW: 'Y'
  },
  {
      code: 'OAS',
      value: 'Open Arms Care Corporation dba Hamilton County #1 Gamble Road - Southeast',
      activateSW: 'Y'
  },
  {
      code: 'OAW',
      value: 'Open Arms Care Corporation dba Greeneville #2 East Church Street - West ',
      activateSW: 'Y'
  },
  {
      code: 'SCO',
      value: 'Sunrise Community of Tennessee',
      activateSW: 'Y'
  },
  {
      code: 'DSA',
      value: 'D & S Residential Services, LP ',
      activateSW: 'Y'
  },
  {
      code: 'DSB',
      value: 'D & S Residential Services, LP ',
      activateSW: 'Y'
  },
  {
      code: 'DSC',
      value: 'D & S Residential Services, LP ',
      activateSW: 'Y'
  },
  {
      code: 'OAK',
      value: 'Open Arms Care Corporation dba Knox County #1 Bishops Bridge Northeast',
      activateSW: 'Y'
  },
  {
      code: 'OAB',
      value: 'Open Arms Care Corporation dba Knox County #2 Bishops Bridge Northwest ',
      activateSW: 'Y'
  },
  {
      code: 'OAX',
      value: 'Open Arms Care Corporation dba Knox County #4 South Northshore Drive Northwest ',
      activateSW: 'Y'
  },
  {
      code: 'OAY',
      value: 'Open Arms Care Corporation dba Knox County #3 South Northshore Drive Southeast ',
      activateSW: 'Y'
  },
  {
      code: 'MDU',
      value: 'Michael Dunn Center ',
      activateSW: 'Y'
  },
  {
    code: 'OTH',
    value: 'Other',
    activateSW: 'Y'
}
];
kbPastLivingList = [{code: 'LT', value:'Long-term Care Facility', activateSW:'Y'},
{code: 'PH', value:'Psychiatric Hospital or Unit', activateSW:'Y'},
{code: 'MH', value:'Mental Health Residence', activateSW:'Y'},
{code: 'SS', value:'Specialized School', activateSW:'Y'},
{code: 'GID', value:'Group Home for Children/Youths with Intellectual Disability', activateSW:'Y'},
{code: 'GPD', value:'Group Home for Children/Youths with Physical Disability', activateSW:'Y'},
{code: 'NO', value:'None of the Above', activateSW:'Y'}];

kbPastLivingCheckboxFormMap =
[{code: 'LT', formControlName: 'longTermCareSw'},
{code: 'PH', formControlName: 'phychiatricHospitalSw'},
{code: 'MH', formControlName: 'mentalHlthSw'},
{code: 'SS', formControlName: 'specialSchoolSw'},
{code: 'GID', formControlName: 'intlctulDisableSw'},
{code: 'GPD', formControlName: 'phyclDisableSw'},
{code: 'NO', formControlName: 'noneSw'}];

livingArrangementMap = new Map();
kblivingArrangementMap = new Map();
facilityNameMap = new Map();
kbPastLivingMap1 = new Map();
kbPastLivingMap2 = new Map();
isLongTermFacility = false;
programName: any;
isKbProgram = false;
otherCheckboxCounter = 0;
noneCheckBoxSelected = false;
otherCheckboxSelected = false;
minDate: Date;
maxDate: Date;
customValidation = customValidation;
isJail = false;
submitted = false;


  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private customValidator: CustomvalidationService,
    private paeCommonService: PaeCommonService
  ) { }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 119, 0, 1);
    this.maxDate = new Date();
    this.programName = this.paeCommonService.getProgramName();
    if (this.programName === 'KB'){
      this.isKbProgram = true;
    }
    this.initializeMapLists();
    this.livingArrangementForm = this.fb.group({
      currLvngArrngCd: [''],
      lvngArngDesc: new FormControl({value: '', disabled: true}),
      facilityName: [''],
      addrLine1: new FormControl({value: '', disabled: true}),
      addrLine2: new FormControl({value: '', disabled: true}),
      city: new FormControl({value: '', disabled: true}),
      stateCd: new FormControl({value: '', disabled: true}),
      zip: new FormControl({value: '', disabled: true}),
      ext: new FormControl({value: '', disabled: true}),
      cntyCd: new FormControl({value: '', disabled: true}),
      phNumber: new FormControl({value: '', disabled: true}),
      longTermCareSw: [null],
      phychiatricHospitalSw: [null],
      mentalHlthSw: [null],
      specialSchoolSw: [null],
      intlctulDisableSw: [null],
      phyclDisableSw: [null],
      noneSw: [null],
      admissionDt: [''],
      expctdDischargeCd: [''],
      anticipatedDischargeDt: [''],
      anticipatedReleaseDt: [''],
      incarcerationDt:['']
    });
  }

  initializeMapLists(){
    for (const livingArrangement of this.livingArrangementList) {
      this.livingArrangementMap.set(livingArrangement.code, livingArrangement.value);
    }
    for (const kblivingArrangement of this.kblivingArrangementList) {
      this.kblivingArrangementMap.set(kblivingArrangement.code, kblivingArrangement.value);
    }
    for (const facilityName of this.facilityNameList) {
      this.facilityNameMap.set(facilityName.code, facilityName.value);
    }
    for (const kbPastLiving of this.kbPastLivingList) {
      this.kbPastLivingMap1.set(kbPastLiving.code, kbPastLiving.value);
    }
    for (const kbPastLivingCheckbox of this.kbPastLivingCheckboxFormMap) {
      this.kbPastLivingMap2.set(kbPastLivingCheckbox.code, kbPastLivingCheckbox.formControlName);
    }
  }

  onfacilityNameSelect(value){
    if (value === 'OTH') {
      this.addressSetValidations();
    }
    else {
      this.addressClearValidations();
    }
  }

  oncurrLvngArrngCdSelect(value){
    if (value === 'OT' || value === 'OTH' || value === ''){
      this.getFormData().lvngArngDesc.enable();
      this.getFormData().lvngArngDesc
      .setValidators([Validators.required, Validators.maxLength(50), this.customValidator.addressAndCityValidator()]);
    }
    else if (value === 'LT' || value === 'LTC' || value === 'JAL') {
      this.isLongTermFacility = true;
      if (value === 'JAL') {
        this.isJail = true;
        this.isLongTermFacility = false;
      }
    }
    else{
      this.isLongTermFacility = false;
      this.getFormData().lvngArngDesc.disable();
      this.getFormData().lvngArngDesc.clearValidators();
      this.getFormData().lvngArngDesc.updateValueAndValidity();
    }
  }
  addressSetValidations(){

    this.getFormData().addrLine1.enable();
    this.getFormData().addrLine2.enable();
    this.getFormData().city.enable();
    this.getFormData().stateCd.enable();
    this.getFormData().zip.enable();
    this.getFormData().ext.enable();
    this.getFormData().cntyCd.enable();
    this.getFormData().phNumber.enable();
    this.getFormData().addrLine1
    .setValidators([Validators.required, Validators.maxLength(100), this.customValidator.addressAndCityValidator()]);
    this.getFormData().addrLine2
    .setValidators([Validators.maxLength(50), this.customValidator.addressAndCityValidator()]);
    this.getFormData().city
    .setValidators([Validators.required, Validators.maxLength(25), this.customValidator.addressAndCityValidator()]);
    this.getFormData().stateCd
    .setValidators([Validators.required]);
    this.getFormData().zip
    .setValidators([Validators.required, Validators.pattern('[0-9]{5}')]);
    this.getFormData().ext
    .setValidators(Validators.pattern('[0-9]'));
    this.getFormData().cntyCd
    .setValidators([Validators.required]);
    this.getFormData().phNumber
    .setValidators([Validators.maxLength(10), this.customValidator.phonenumberValidator()]);
    this.getFormData().addrLine1.updateValueAndValidity();
    this.getFormData().addrLine2.updateValueAndValidity();
    this.getFormData().city.updateValueAndValidity();
    this.getFormData().stateCd.updateValueAndValidity();
    this.getFormData().zip.updateValueAndValidity();
    this.getFormData().ext.updateValueAndValidity();
    this.getFormData().cntyCd.updateValueAndValidity();
    this.getFormData().phNumber.updateValueAndValidity();
  }
  addressClearValidations(){
    this.getFormData().addrLine1.clearValidators();
    this.getFormData().addrLine2.clearValidators();
    this.getFormData().city.clearValidators();
    this.getFormData().stateCd.clearValidators();
    this.getFormData().zip.clearValidators();
    this.getFormData().ext.clearValidators();
    this.getFormData().cntyCd.clearValidators();
    this.getFormData().phNumber.clearValidators();
    this.getFormData().addrLine1.disable();
    this.getFormData().addrLine2.disable();
    this.getFormData().city.disable();
    this.getFormData().stateCd.disable();
    this.getFormData().zip.disable();
    this.getFormData().ext.disable();
    this.getFormData().cntyCd.disable();
    this.getFormData().phNumber.disable();
    this.getFormData().addrLine1.updateValueAndValidity();
    this.getFormData().addrLine2.updateValueAndValidity();
    this.getFormData().city.updateValueAndValidity();
    this.getFormData().stateCd.updateValueAndValidity();
    this.getFormData().zip.updateValueAndValidity();
    this.getFormData().ext.updateValueAndValidity();
    this.getFormData().cntyCd.updateValueAndValidity();
    this.getFormData().phNumber.updateValueAndValidity();
  }
  getFormData() {
    return this.livingArrangementForm.controls;
  }

  checkboxSelected(event){
    if (event.checked === true && event.source.value !== 'NO') {
      const formControlNameForCheckBox = this.kbPastLivingMap2.get(event.source.value);
      this.getFormData()[formControlNameForCheckBox].patchValue('Y');
      this.otherCheckboxCounter = this.otherCheckboxCounter + 1;
    }
    else if (event.checked === false && event.source.value !== 'NO') {
      const formControlNameForCheckBox = this.kbPastLivingMap2.get(event.source.value);
      this.getFormData()[formControlNameForCheckBox].patchValue('N');
      this.otherCheckboxCounter = this.otherCheckboxCounter - 1;
    }
    else if (event.checked === true && event.source.value === 'NO') {
      this.getFormData().noneSw.patchValue('Y');
      this.noneCheckBoxSelected = true;
    }
    else if (event.checked === false && event.source.value === 'NO') {
      this.getFormData().noneSw.patchValue('N');
      this.noneCheckBoxSelected = false;
    }

    if (this.otherCheckboxCounter > 0) {
      this.otherCheckboxSelected = true;
    }
    else if (this.otherCheckboxCounter === 0){
      this.otherCheckboxSelected = false;
    }
  }

  saveLivingArrangement() {
    this.submitted = true;
    console.log(this.livingArrangementForm);
    this.paeCommonService.setLivingArrangement(this.getFormData().currLvngArrngCd.value);
  }

  saveAndExit() {
    if (this.submitted) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = { route: 'dashboard/pae' };
      dialogConfig.panelClass = 'exp_popup';
      dialogConfig.width = '500px';
      this.dialog.open(SavePopupComponent, dialogConfig );
    }
  }
}
