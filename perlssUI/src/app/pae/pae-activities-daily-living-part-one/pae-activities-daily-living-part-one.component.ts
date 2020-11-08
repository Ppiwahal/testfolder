import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Form, FormBuilder, FormControl, FormGroup,Validators,FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import * as customValidation from '../../_shared/constants/validation.constants';
import { MatRadioChange, MatRadioButton  } from '@angular/material/radio';
import { CustomvalidationService } from '../../_shared/utility/customvalidation.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PaeAppointment } from '../../_shared/model/PaeAppointment'
import { PaeAppointmentSearch } from '../../_shared/model/PaeAppointmentSearch'
import { PaeService } from '../../core/services/pae/pae.service'



@Component({
  selector: 'app-pae-activities-daily-living-part-one',
  templateUrl: './pae-activities-daily-living-part-one.component.html',
  styleUrls: ['./pae-activities-daily-living-part-one.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PaeActivitiesDailyLivingPartOneComponent implements OnInit {
  
  paeActivitiesDailyLivingFormGroup: FormGroup;
  customValidation = customValidation;
  constructor(fb: FormBuilder, private customValidationService: CustomvalidationService,
      private paeService: PaeService
      ) {
    this.paeActivitiesDailyLivingFormGroup = fb.group({​​​​​​​
    bathingNoneSw: [null ],
    bathtubConResSw: [null],
    bathtubRepResSw: [null],
    bowelBladdConResSw: [null],
    bowelBladdRepResSw: [null],
    chokingConResSw: [null],
    chokingRepResSw: [null],
    combatBathConResSw: [null],
    combatBathRepResSw: [null],
    combatGroomConResSw: [null],
    combatGroomRepResSw: [null],
    cueingConResSw: [null],
    cueingGroomConResSw: [null],
    cueingGroomRepResSw: [null],
    cueingRepResSw: [null],
    doesNotSupDreConResSw: [null],
    doesNotSupDreRepResSw: [null],
    dressingNoneSw: [null],
    eatingNoneSw: [null],
    exhNonCompBehConResSw: [null],
    exhNonCompBehRepResSw: [null],
    expressCommSw: [null],
    groomingNoneSw: [null],
    incontDayConResSw: [null],
    incontDayRepResSw: [null],
    incontNightConResSw: [null],
    incontNightRepResSw: [null],
    learningSw: [null],
    mechLiftConResSw: [null],
    mechLiftRepResSw: [null],
    mobilityNoneSw: [null],
    neddPhyConResSw: [null],
    needPhyRepResSw: [null],
    needsFedConResSw: [null],
    needsFedRepResSw: [null],
    needsWantsConResSw: [null],
    needsWantsRepResSw: [null],
    paeId: ["PAE1000026"],
    phyCharDiffConResSw: [null],
    phyCharDiffRepResSw: [null],
    phyHelpBathConResSw: [null],
    phyHelpBathRepResSw: [null],
    phyHelpClothConResSw: [null],
    phyHelpClothRepResSw: [null],
    phyHelpGroomConResSw: [null],
    phyHelpGroomRepResSw: [null],
    receptiveCommSw: [null],
    reqPageId: ["PAEIF"],
    riskSafetyConResSw: [null],
    riskSafetyRepResSw: [null],
    rollingConResSw: [null],
    rollingRepResSw: [null],
    sitPositionConResSw: [null],
    sitPositionRepResSw: [null],
    toiletingNoneSw: [null],
    transferNoneSw: [null],
    tubeFeedConResSw: [null],
    tubeFeedRepResSw: [null],
    unableToDressConResSw: [null],
    unableToDressRepResSw: ["Y"],
    unableToPullOfConResSw: [null],
    unableToPullOfRepResSw: ["Y"],
    washHandsConResSw: ["Y"],
    washHandsRepResSw: [null]
}​​​​​​​
)
  }
ngOnInit() {
  
}

  
goNext() {
  this.markFormGroupTouched(this.paeActivitiesDailyLivingFormGroup);
}
back(){
  this.markFormGroupTouched(this.paeActivitiesDailyLivingFormGroup);
}

get getPaeActivitiesDailyLivingForm() {
     return this.paeActivitiesDailyLivingFormGroup.controls;    
}

savePaeActvitiesDailyLiving() {
  if(this.paeActivitiesDailyLivingFormGroup.valid) {
    const request = this.paeActivitiesDailyLivingFormGroup.value
    this.paeService.savePaeActivitiesDailyLivingPartOne(request).then()
  }
}

bathingNoneChange(checked: boolean) {
  if(checked) {
 if(this.getPaeActivitiesDailyLivingForm.combatBathRepResSw.value || this.getPaeActivitiesDailyLivingForm.combatBathConResSw.value || this.getPaeActivitiesDailyLivingForm.phyHelpBathRepResSw.value || this.getPaeActivitiesDailyLivingForm.phyHelpBathConResSw.value ||
 this.getPaeActivitiesDailyLivingForm.bathtubRepResSw.value || this.getPaeActivitiesDailyLivingForm.bathtubConResSw.value ||
 this.getPaeActivitiesDailyLivingForm.cueingRepResSw.value || this.getPaeActivitiesDailyLivingForm.cueingConResSw.value || 
 this.getPaeActivitiesDailyLivingForm.riskSafetyRepResSw.value || this.getPaeActivitiesDailyLivingForm.riskSafetyConResSw.value) {
      this.getPaeActivitiesDailyLivingForm.bathingNoneSw.setErrors({notAllowedNone: true})
    }
  } else {

  }
}
transferNoneChange(checked: boolean) {
  if(checked) {
    if(this.getPaeActivitiesDailyLivingForm.needPhyRepResSw.value || this.getPaeActivitiesDailyLivingForm.neddPhyConResSw.value || this.getPaeActivitiesDailyLivingForm.mechLiftRepResSw.value || this.getPaeActivitiesDailyLivingForm.mechLiftConResSw.value) {
      this.getPaeActivitiesDailyLivingForm.transferNoneSw.setErrors({notAllowedNone: true})
    }
  } else {
    
  }
}
mobilityNoneChange(checked: boolean) {
  if(checked) {
 if(this.getPaeActivitiesDailyLivingForm.sitPositionRepResSw.value || this.getPaeActivitiesDailyLivingForm.sitPositionConResSw.value || this.getPaeActivitiesDailyLivingForm.rollingRepResSw.value || this.getPaeActivitiesDailyLivingForm.rollingConResSw.value) {
      this.getPaeActivitiesDailyLivingForm.mobilityNoneSw.setErrors({notAllowedNone: true})
    }
  } else {
  
  }
}
eatingNoneChange(checked: boolean) {
  if(checked) {
 if(this.getPaeActivitiesDailyLivingForm.needsFedRepResSw.value || this.getPaeActivitiesDailyLivingForm.needsFedConResSw.value || this.getPaeActivitiesDailyLivingForm.chokingRepResSw.value || 
 this.getPaeActivitiesDailyLivingForm.tubeFeedRepResSw.value || this.getPaeActivitiesDailyLivingForm.tubeFeedConResSw.value || this.getPaeActivitiesDailyLivingForm.chokingConResSw.value || 
 this.getPaeActivitiesDailyLivingForm.needsWantsRepResSw.value || this.getPaeActivitiesDailyLivingForm.needsWantsConResSw.value) {
      this.getPaeActivitiesDailyLivingForm.eatingNoneSw.setErrors({notAllowedNone: true})
    }
  } else {
  
  }
}
toiletingNoneChange(checked: boolean) {
  if(checked) {
 if(this.getPaeActivitiesDailyLivingForm.incontDayRepResSw.value || this.getPaeActivitiesDailyLivingForm.incontDayConResSw.value || this.getPaeActivitiesDailyLivingForm.incontNightRepResSw.value || this.getPaeActivitiesDailyLivingForm.incontNightConResSw.value ||
 this.getPaeActivitiesDailyLivingForm.bowelBladdRepResSw.value || this.getPaeActivitiesDailyLivingForm.bowelBladdConResSw.value) {
      this.getPaeActivitiesDailyLivingForm.toiletingNoneSw.setErrors({notAllowedNone: true})
    }
  } else {
  
  }
}

markFormGroupTouched = (formGroup) => {
  (<any>Object).values(formGroup.controls).forEach(control => {
    control.markAsTouched();

    if (control.controls) {
      this.markFormGroupTouched(control);
    }
  });
};

}