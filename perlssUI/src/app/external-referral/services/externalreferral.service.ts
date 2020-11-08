import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http/';
import { Observable, Subject, of } from 'rxjs';
import { EnvService } from '../../_shared/utility/env.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RefApplicantDetail } from '../../_shared/model/RefApplicantDetail';
import { RefSchAndWork } from '../../_shared/model/RefSchAndWork';
import { RefSubmission } from '../../_shared/model/RefSubmission';
import { RefAppContact } from '../../_shared/model/RefAppContact';
import { RefCareAndSupport } from '../../_shared/model/RefCareAndSupport';
import { Applicant } from '../../_shared/model/Applicant';
import { ApplicantAddress } from '../../_shared/model/ApplicantAddress';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
//import { ExtReferralStart } from '../../_shared/model/ExtReferralStart';
import { ExtRefApplicant } from '../../_shared/model/ExtRefApplicant';


@Injectable({
  providedIn: 'root'
})
export class ExternalreferralService {
  id: string;
  response: any;
  public serverApiUrl: any;
  applicantAdd : ApplicantAddress;

  private startReferralSource: Subject<FormGroup> = new Subject();
  stepOne: Observable<FormGroup> = this.startReferralSource.asObservable();

  private applicantInfoSource: Subject<FormGroup> = new Subject();
  stepTwo: Observable<FormGroup> = this.applicantInfoSource.asObservable();
  
  private contactInfoSource: Subject<FormGroup> = new Subject();
  stepThree: Observable<FormGroup> = this.contactInfoSource.asObservable();

  private schoolWorkSource: Subject<FormGroup> = new Subject();
  stepFour: Observable<FormGroup> = this.schoolWorkSource.asObservable();

  private careSupportSource: Subject<FormGroup> = new Subject();
  stepFive: Observable<FormGroup> = this.careSupportSource.asObservable();

  private submitReferralSource: Subject<FormGroup> = new Subject();
  stepSix: Observable<FormGroup> = this.submitReferralSource.asObservable();

  private paramSource = new BehaviorSubject(null);
  sharedParam = this.paramSource.asObservable();
  
  mainForm: FormGroup = this._formBuilder.group({
    refStartVO: RefApplicantDetail,
    refApplicantVO: ExtRefApplicant,
    refAppContactDtlVO: RefAppContact,
    refSchAndWorkVO:RefSchAndWork,
    refCareAndSupportVO:RefCareAndSupport,
    refSubmissionVO:RefSubmission
  })

  
  constructor(private http: HttpClient,
    private envService: EnvService,
    private _formBuilder: FormBuilder) {
      this.serverApiUrl = this.envService.apiUrl();
      
      this.stepOne.subscribe(form =>
        form.valueChanges.subscribe(val => {
          this.mainForm.controls.refStartVO.patchValue(val);
          //this.myForm.controls.appointmentAddressVO.patchValue(value);
          //console.log(this.mainForm.value);
        })
      )
      this.stepTwo.subscribe(form =>
        form.valueChanges.subscribe(val2 => {
          this.mainForm.controls.refApplicantVO.patchValue(val2);
         // console.log(this.mainForm.value);
        })
      )
      this.stepThree.subscribe(form =>
        form.valueChanges.subscribe(val3 => {
          this.mainForm.controls.refAppContactDtlVO.patchValue(val3);
          //console.log(this.mainForm.value);
        })
      )
      this.stepFour.subscribe(form =>
        form.valueChanges.subscribe(val4 => {
          this.mainForm.controls.refSchAndWorkVO.patchValue(val4);
          //console.log(this.mainForm.value);
        })
      )
      this.stepFive.subscribe(form =>
        form.valueChanges.subscribe(val5 => {
          this.mainForm.controls.refCareAndSupportVO.patchValue(val5);
          //console.log(this.mainForm.value);
        })
      )
      this.stepSix.subscribe(form =>
        form.valueChanges.subscribe(val6 => {
          this.mainForm.controls.refSubmissionVO.patchValue(val6);
          //console.log(this.mainForm.value);
        })
      )
     }

     changeParam(param: number) {
      this.paramSource.next(param)
    }
  

     stepReady(form: FormGroup, part) {
      switch (part) {
        case 'one': { this.startReferralSource.next(form) }
        case 'two': { this.applicantInfoSource.next(form) }
        case 'three': { this.contactInfoSource.next(form) }
        case 'four': { this.schoolWorkSource.next(form) }
        case 'five': { this.careSupportSource.next(form) }
        case 'six': { this.submitReferralSource.next(form) }
      }
    }
}
