import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaeDiagnosisSummary } from '../../_shared/model/paeDiagnosis/paeDiagnosisSummary';
import { paeDiagnosisSummaryService } from '../../core/services/pae/medicalDiagnosis/pae-diagnosis-summary';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pae-diagnosis-summary',
  templateUrl: './pae-diagnosis-summary.component.html',
  styleUrls: ['./pae-diagnosis-summary.component.scss']
})
export class PaeDiagnosisSummaryComponent implements OnInit {
  myForm: FormGroup;
  showDocumentationSection: boolean;
  showUploadBtn: boolean;
  ImageBaseData: any;
  showTick: boolean;
  fileName: string;
  documentVO: string;
  aplPdfTypeCd: string;
  aplRequestId: string;
  destinationCd: string;
  document: any;

  constructor(fb: FormBuilder, private router: Router, private paediagnosisSummaryService: paeDiagnosisSummaryService) {
    this.myForm = fb.group({
      pageChoice: new FormControl()
    });
   }

  ngOnInit(): void {
  }

  gotoDetailPage() {
    this.router.navigate(['dashboard/pae/paeStart/medicalDiagnosis']);
  }

  handleFileInput(files: FileList) {
    this.showUploadBtn = true;
    const me = this;
    const file = files[0];
    this.fileName =  file.name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      me.ImageBaseData = reader.result;
    };
    reader.onerror = function(error) {
      console.log('Error: ', error);
    };
  }

  uploadFile() {
    console.log('this.ImageBaseData==', this.ImageBaseData);
    if (this.ImageBaseData == null) {
      alert('Please select file');
    } else {
      console.log('this.ImageBaseData ', this.ImageBaseData);
      const fileUplodVM: PaeDiagnosisSummary = {
        document: this.ImageBaseData,
        documentVO: '',
        aplPdfTypeCd: '',
        aplRequestId: '',
        appPdfSw:'',
        destinationCd: '',
        documentType: '',
        genDocumentId:'',
        paeId:'',
        pageId:'',
        personId:'',
        refId:''
      };

      this.paediagnosisSummaryService.savePaeDiagnosisSummary(fileUplodVM).then((response) => {

      });
    }
  }
}
