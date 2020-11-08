import { Component, OnInit } from '@angular/core';
import { ReferralService } from '../../core/services/referral/referral.service';

@Component({
  selector: 'app-extref-confirmation',
  templateUrl: './extref-confirmation.component.html',
  styleUrls: ['./extref-confirmation.component.scss']
})
export class ExtrefConfirmationComponent implements OnInit {

  constructor(private referralService: ReferralService) { }
 
  refId: string; 
  
  ngOnInit(): void {
    this.refId=this.referralService.getRefId();
  }

}
