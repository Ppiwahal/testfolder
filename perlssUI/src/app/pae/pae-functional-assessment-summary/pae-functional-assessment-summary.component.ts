
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatRadioChange, MatRadioButton  } from '@angular/material/radio';
import * as customValidation from '../../_shared/constants/validation.constants';

@Component({
  selector: 'pae-functional-assessment-summary',
  templateUrl: './pae-functional-assessment-summary.component.html'
})

export class PaeFunctionalAssessmentSummaryComponent implements OnInit {
  customValidation = customValidation;

  event: string;
  submitted: boolean;
  choice: "KB";
  functionalAssessmentSummaryForm: FormGroup;

  constructor(
    fb: FormBuilder, 
    private router: Router,
  ) {

    this.myForm = fb.group({
      pageChoice: new FormControl()
    });

  }

  myForm: FormGroup;

  data: any = {
    FunctionalAssessmentSummary: [
      { 
        activity: "Activities of Daily Living - Part 1",
        complete: true,
        action: ""
      },
      { 
        activity: "Activities of Daily Living - Part 1",
        complete: false,
        action: ""
      }
    ],
    acuityScore: [
      {name: "Transfer", value: 3},
      {name: "Mobility", value: 0},
      {name: "Mobility-Wheelchair", value: 3},
      {name: "Eating", value: 3},
      {name: "Toileting", value: 3},
      {name: "Toileting Incontinence", value: 1},
      {name: "Toileting - Catheter / Ostomy", value: 0},
      {name: "Orientation", value: 3},
      {name: "Communication Expressive", value: 3},
      {name: "Communication Receptive", value: 3},
      {name: "Medication", value: 1},
      {name: "Behavior", value: 2},
    ],
    supportingDocumentation: [
      { name: "Transfer Deficit", uploaded: true  }, 
      { name: "Mobility Deficit", uploaded: false }
    ]
  }

  showSupportingDocumentation: boolean = true;
  showAcuity: boolean = true;

  ngOnInit(): void {

    
  }

  onChoice(mrChange: MatRadioChange) {
    this.choice = mrChange.value;
  }

  saveAndExit() {
    this.event = 'SaveAndExit';
    this.saveActivitiesPartTwo();
  }
 
  next() {
    var routes = { KB: 'activitiesPartTwo', Standard:  'capabilitiesNeedsPartTwo'};
    this.event = 'Next';
    this.submitted = true;
    window.localStorage.setItem("partTwo","/dashboard/pae/" + routes[this.choice]);
    this.router.navigate(['/dashboard/pae/capabilitiesNeedsPartOne']);
  }
  
  saveActivitiesPartTwo() {
    this.next();
  }

  back() {
    const previousForm = 'PRAPIF';
  }
}
