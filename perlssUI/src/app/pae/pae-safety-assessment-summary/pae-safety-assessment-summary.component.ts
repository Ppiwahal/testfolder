import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from '../../_shared/utility/customvalidation.service';
import * as customValidation from '../../_shared/constants/validation.constants';

export interface SafetyDeterminationDetails {
  name: string;
  status: string;
  userActions: string;
  icon:string;
}

export interface SupportingDocsDetails {
  name: string;
  icon:string;
}

export interface AdditionalRequiredDocsDetails {
  name: string;
  icon:string;
}

const ELEMENT_DATA: SafetyDeterminationDetails[] = [
  {name: 'Safety Determination Form', status: 'Incomplete', userActions: 'GO TO DETAILS', icon: "close"},
  {name: 'Fall History', status: 'Incomplete', userActions: '---', icon: "close"}
];

const ELEMENT_DATA2: SupportingDocsDetails[] = [
  {name: 'Score 5-8 with Safety Concerns', icon: "cloud_upload"},
  {name: 'Change in Needs', icon: "cloud_upload"},
  {name: 'Change in Primary Caregiver Status', icon: "cloud_upload"},
  {name: 'Documentation of Falls', icon: "cloud_upload"},
  {name: 'Inpatient Admissions/ER Visits', icon: "cloud_upload"},
  {name: 'APS/Police Involvement', icon: "cloud_upload"},
  {name: 'CBRA Discharge', icon: "cloud_upload"},
  {name: 'Other Safety Concerns', icon: "cloud_upload"},
  {name: 'Maladaptive Behavior Assessment (MBA and MBI)', icon: "cloud_upload"},
  {name: 'Behavior Deficit', icon: "cloud_upload"},
  {name: 'Orientation Deficit', icon: "cloud_upload"},
  {name: 'Mobility Deficit', icon: "cloud_upload"},
  {name: 'Transfer Deficit', icon: "cloud_upload"},
  {name: 'Toileting Deficit', icon: "cloud_upload"}
];

const ELEMENT_DATA3: AdditionalRequiredDocsDetails[] = [
  {name: 'Comprehensive Needs Assessment', icon: "cloud_upload"},
  {name: 'Prior 6 months', icon: "cloud_upload"},
  {name: 'Recent Events', icon: "cloud_upload"},
  {name: 'Plan of Care or Support Plan', icon: "cloud_upload"},
  {name: 'Safety Explanation', icon: "cloud_upload"},
  {name: 'Interagency Review and Decision', icon: "cloud_upload"}
];

@Component({
  selector: 'app-pae-safety-assessment-summary',
  templateUrl: './pae-safety-assessment-summary.component.html',
  styleUrls: ['./pae-safety-assessment-summary.component.scss']
})
export class PaeSafetyAssessmentSummaryComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'status', 'userActions'];
  displayedColumnsSuppDocs: string[] = ['name', 'status'];
  displayedColumnsAddReqDocs: string[] = ['name', 'status'];
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;
  dataSource3 = ELEMENT_DATA3;
  showHide: boolean;
  showHide2: boolean;
  showHide3: boolean;
  paeSafetyAssessmentSummaryForm: FormGroup;

  constructor(private fb: FormBuilder,
              private customValidator: CustomvalidationService) { }

  ngOnInit(): void {
    this.paeSafetyAssessmentSummaryForm = this.fb.group({
      visCap: ['', [Validators.required]],
      fallDt: ['', [Validators.required]]
    });
  }

  getFormData() {
    return this.paeSafetyAssessmentSummaryForm.controls;
  }

  reqSafetyConsideration() {
    this.showHide = true;
    this.showHide2 = false;
    this.showHide3 = true;
  }

  dontNeedConsideration() {
    this.showHide = false;
    this.showHide2 = true;
  }

  // nfServicesEvent(event){
  //   if(event.checked) {
  //     this.showHide3 = true;
  //   } 
  //   else if(!event.checked) {
  //     this.showHide3 = false;
  //   }
  // }

  saveSafetyAssessmentSummary() {

  }

}
