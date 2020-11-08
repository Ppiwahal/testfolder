import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Form, FormBuilder, FormControl, FormGroup,Validators,FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import * as customValidation from '../../_shared/constants/validation.constants';
import { MatRadioChange, MatRadioButton  } from '@angular/material/radio';
import { CustomvalidationService } from '../../_shared/utility/customvalidation.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { SafetyDeterminationAdmissionPopupComponent } from 'src/app/_shared/modal/safety-determination-admission-popup/safety-determination-admission-popup.component';


@Component({
  selector: 'app-pae-safety-determination',
  templateUrl: './pae-safety-determination.component.html',
  styleUrls: ['./pae-safety-determination.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PaeSafetyDeterminationComponent implements OnInit {
  
  paeSafetyDeterminationFormGroup: FormGroup;
  safetyAttestations = [{selected: false, text: 'I do not believe the individuals can be safety served in the community in CHOICES Group 3.'},
  {selected: false, text: 'I believe this indivedual CAN be safely served in the community in CHOICES Group 3.'},
  {selected: false, text: 'This safety determination form was completed ar the request of the applicants/representative.'}]
  customValidation = customValidation;
  safetyJustificationList = [];
  constructor(fb: FormBuilder, private customValidationService: CustomvalidationService, private dialog: MatDialog) {
    this.paeSafetyDeterminationFormGroup = fb.group({
      safetyJustifications: [null, [Validators.required]],
      credential: [''],
      qualifiedAccessorCode: ['', [Validators.required, this.customValidationService.specialCharacterValidator(), ]],
      qualifiedAccessorName: ['', [Validators.required]],
      intellectualDevDisablity: ['', [Validators.required]],
      icapScore: ['', [Validators.required, this.customValidationService.specialCharacterValidator()]]
    })
  }
  
  ngOnInit() {
    this.safetyJustificationList = [{text: 'An approved acuity score of at least (5) but no more than eight (8).', value: '1'}, 
    {text: 'An individual acuity score of the least 3 for the mobility or transfer measures.', value: '2'},
    {text: 'An individual acuity score of the least 2 for the toileting measure.', value: '3'},
    {text: 'An individual acuity score of the least 3 for the Behavior measure.', value: '4'},
    {text: 'Significant change in physical or behavioral health or functional needs for applicant.', value: '5'},
    {text: 'Significant change in physical or behavioral health or functional needs for applicant\'s primary carediver.', value: '6'},
    {text: 'pattran of recent falls reasulting in injury.', value: '7'},
    {text: 'Self-negligence resulting in involvement by law enforcement or adult protective services.', value: '8'},
    {text: 'Recently discharged from a community - based residential alternative setting.', value: '9'},
    {text: 'Has diagnosed complex  acute or chronic medical conditions.', value: '10'},
    {text: 'Requires post-acute or chronic medical conditions', value: '11'},
    {text: 'Requires post-acute inpatient treatment for a specified period of time.', value: '12'},
    {text: 'MCO has determind applicant\'s needs cannot be safely met if enrolled in group 3.', value: '13'},
    {text: 'None of the criteria have been met, but other safety concerns which impact the applicant being safely served in CHOICES Group 3 exist.', value: '14'},
    {text: 'Applicant is a current CHOICHE Group 1 or 2 or PACE Member enrolled on or after 7/1/2012 and no longer meet NF LOC requirements', value: '15'}
    ]
  }

  saveSafetyDetermination() {

  }

  back() {

  }

  next() {

  }

isQualifiedAccessorNameCodeMatch(control: string) {
  //TODO: Logic to check code and name match
  this.paeSafetyDeterminationFormGroup.controls[control].setErrors({error: true})
  return true;
}
isAccessorCodeValid(control: string) {
 //TODO: Logic to check code and name match
 this.paeSafetyDeterminationFormGroup.controls[control].setErrors({error: true})
  return true; 
}
isAccessorCodeExpired(control: string) {
 //TODO: Logic to check code and name match
 this.paeSafetyDeterminationFormGroup.controls[control].setErrors({error: true})
  return true; 
}
markFormGroupTouched = (formGroup) => {
  (<any>Object).values(formGroup.controls).forEach(control => {
    control.markAsTouched();

    if (control.controls) {
      this.markFormGroupTouched(control);
    }
  });
};
callTestModal() {
  this.dialog.open(SafetyDeterminationAdmissionPopupComponent, {
      width: '850px',
      height: '500px'
    });
  }




}