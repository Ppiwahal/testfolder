import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatRadioChange, MatRadioButton } from '@angular/material/radio';
import { CustomvalidationService } from 'src/app/_shared/utility/customvalidation.service';
import * as customValidation from '../../_shared/constants/validation.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pae-activity-daily-living-part-one',
  templateUrl: './pae-activity-daily-living-part-one.component.html'
})
export class PaeActivityDailyLivingPartOneComponent implements OnInit {

  myForm: FormGroup;
  toggleCatheterOstomy = false;
  customValidation = customValidation;
  subWheelChairCapableCd = false;
  toiletingSubSection = false;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private router: Router
  ) { }
  get f() {
    return this.myForm.controls;
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
       transferWithoutHelpCd: ['', [Validators.required]],
         walkWithoutHelpCd: ['', [Validators.required]],
         eatWithoutHelpCd: ['', [Validators.required]],
         wheelChairCapableCd: [''],
         toiletWithoutHelpCd: ['', [Validators.required]],
         applicantIncontSw: ['', [Validators.required]],
         incontTypeCd: ['', [Validators.required]],
         incontWithoutHelpCd: ['', [Validators.required]],
         catheterOstomySw: ['', [Validators.required]],
         cathOstWithoutHelpCd: ['', [Validators.required]],
    });
  }

  next() {
    this.submitted = true;
    if (this.myForm.valid) {
    }
  }

  getFormData() {
    return this.myForm.controls;
  }

  onChangecatheterOstomySw(mrChange: MatRadioChange) {
    if (mrChange.value === 'Y') {
      this.toggleCatheterOstomy = true;
    } else {
      this.toggleCatheterOstomy = false;
    }
  }

  onChangewalkWithoutHelpCd(event) {
    if (event === 'usuallyNot' || event === 'never') {
      this.subWheelChairCapableCd = true;
    } else {
      this.subWheelChairCapableCd = false;
    }
  }

  onChangeapplicantIncontSw(mrChange: MatRadioChange) {
    if (mrChange.value === 'Y') {
      this.toiletingSubSection = true;
    } else {
      this.toiletingSubSection = false;
    }
  }

}
