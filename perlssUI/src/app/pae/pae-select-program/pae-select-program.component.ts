import { Component, OnInit } from '@angular/core';
import { PaeCommonService } from 'src/app/core/services/pae/pae-common/pae-common.service';

@Component({
  selector: 'app-pae-select-program',
  templateUrl: './pae-select-program.component.html',
  styleUrls: ['./pae-select-program.component.scss'],
})
export class PaeSelectProgramComponent implements OnInit {
  programName: any;
  paeAge: any;
  livingArrangement: any;
  isKbProgram = false;
  isKbProgramSelected = false;
  isChoicesGroupOne = false;
  isChoicesGroupOneSelected = false;
  isIcfIid = false;
  isIcfIidSelected = false;
  isEcfChoiceFive = false;
  isEcfChoiceSix = false;
  isEcfChoiceEight = false;
  isEcfChoiceFiveSelected = false;
  isEcfChoiceSixSelected = false;
  isEcfChoiceEightSelected = false;
  isChoicesHcbs = false;
  isChoicesHcbsSelected = false;
  isEcfChoiceSeven = false;
  isEcfChoiceSevenSelected = false;
  isEcfChoiceFour = false;
  isEcfChoiceFourSelected = false;
  cac = false;
  cacSelected = false;
  county: string;
  isPace = false;
  isPaceSelected = false;

  constructor(private paeCommonService: PaeCommonService) {}

  ngOnInit(): void {
    this.programName = this.paeCommonService.getProgramName();
    this.paeAge = this.paeCommonService.getAge();
    this.livingArrangement = this.paeCommonService.getLivingArrangement();
    this.county = this.paeCommonService.getCounty();
    if (this.programName !== undefined && this.programName === 'KB') {
      this.isKbProgram = true;
      this.isKbProgramSelected = true;
    } else {
      this.isChoicesGroupOne = true;
      this.isIcfIid = true;
      if (this.programName !== undefined && this.programName === 'CG1') {
          this.isChoicesGroupOneSelected = true;
      } else if (this.programName !== undefined && this.programName === 'ICF') {
          this.isIcfIidSelected = true;
      }

      if (this.paeAge >= 20) {
        this.isChoicesHcbs = true;
        if (this.programName !== undefined && this.programName === 'CG2') {
          this.isChoicesHcbsSelected = true;
        }
      }
      if (this.paeAge >= 18) {
        this.isEcfChoiceFive = true;
        this.isEcfChoiceSix = true;
        this.isEcfChoiceEight = true;
        if (this.programName !== undefined && this.programName === 'EC5') {
          this.isEcfChoiceFiveSelected = true;
        } else if (this.programName !== undefined && this.programName === 'EC6') {
          this.isEcfChoiceSixSelected = true;
        } else if (this.programName !== undefined && this.programName === 'EC8') {
          this.isEcfChoiceEightSelected = true;
        }
      }
      if (this.livingArrangement === 'HOM') {
        this.isEcfChoiceFour = true;
        if (this.programName !== undefined && this.programName === 'EC4') {
          this.isEcfChoiceFourSelected = true;
        }
      }
      if (this.livingArrangement === 'HJC') {
        this.cac = true;
        if (this.programName !== undefined && this.programName === 'CAC') {
          this.cacSelected = true;
        }
      }
      if (this.paeAge >= 55 && this.county === 'Hamilton') {
        this.isPace = true;
        if (this.programName !== undefined && this.programName === 'PACE') {
          this.isPaceSelected = true;
        }
      }
      if (this.paeAge <= 20) {
        this.isEcfChoiceSeven = true;
        if (this.programName !== undefined && this.programName === 'EC7') {
          this.isEcfChoiceSevenSelected = true;
        }
      }
    }
  }

  onKBClicked() {
    this.isKbProgramSelected = true;
    this.isChoicesGroupOneSelected = false;
    this.isChoicesHcbsSelected = false;
    this.isEcfChoiceFourSelected = false;
    this.isEcfChoiceFiveSelected = false;
    this.isEcfChoiceSixSelected = false;
    this.isEcfChoiceSevenSelected = false;
    this.isEcfChoiceEightSelected = false;
    this.isPaceSelected = false;
    this.cacSelected = false;
    this.isIcfIidSelected = false;

  }
  onChoicesGroupOneClicked() {
    this.isKbProgramSelected = false;
    this.isChoicesGroupOneSelected = true;
    this.isChoicesHcbsSelected = false;
    this.isEcfChoiceFourSelected = false;
    this.isEcfChoiceFiveSelected = false;
    this.isEcfChoiceSixSelected = false;
    this.isEcfChoiceSevenSelected = false;
    this.isEcfChoiceEightSelected = false;
    this.isPaceSelected = false;
    this.cacSelected = false;
    this.isIcfIidSelected = false;
    localStorage.setItem('selectedMenu', 'MedicalKB');
  }
  onChoicesHcbsClicked(){
    this.isKbProgramSelected = false;
    this.isChoicesGroupOneSelected = false;
    this.isChoicesHcbsSelected = true;
    this.isEcfChoiceFourSelected = false;
    this.isEcfChoiceFiveSelected = false;
    this.isEcfChoiceSixSelected = false;
    this.isEcfChoiceSevenSelected = false;
    this.isEcfChoiceEightSelected = false;
    this.isPaceSelected = false;
    this.cacSelected = false;
    this.isIcfIidSelected = false;
    localStorage.setItem('selectedMenu', 'MedicalHCBS');
  }

  onEcfChoiceFourClicked(){
    this.isKbProgramSelected = false;
    this.isChoicesGroupOneSelected = false;
    this.isChoicesHcbsSelected = false;
    this.isEcfChoiceFourSelected = true;
    this.isEcfChoiceFiveSelected = false;
    this.isEcfChoiceSixSelected = false;
    this.isEcfChoiceSevenSelected = false;
    this.isEcfChoiceEightSelected = false;
    this.isPaceSelected = false;
    this.cacSelected = false;
    this.isIcfIidSelected = false;
    localStorage.setItem('selectedMenu', 'MedicalECF');
  }

  onEcfChoiceFiveClicked() {
    this.isKbProgramSelected = false;
    this.isChoicesGroupOneSelected = false;
    this.isChoicesHcbsSelected = false;
    this.isEcfChoiceFourSelected = false;
    this.isEcfChoiceFiveSelected = true;
    this.isEcfChoiceSixSelected = false;
    this.isEcfChoiceSevenSelected = false;
    this.isEcfChoiceEightSelected = false;
    this.isPaceSelected = false;
    this.cacSelected = false;
    this.isIcfIidSelected = false;
    localStorage.setItem('selectedMenu', 'MedicalECF');
  }

  onEcfChoiceSixClicked() {
    this.isKbProgramSelected = false;
    this.isChoicesGroupOneSelected = false;
    this.isChoicesHcbsSelected = false;
    this.isEcfChoiceFourSelected = false;
    this.isEcfChoiceFiveSelected = false;
    this.isEcfChoiceSixSelected = true;
    this.isEcfChoiceSevenSelected = false;
    this.isEcfChoiceEightSelected = false;
    this.isPaceSelected = false;
    this.cacSelected = false;
    this.isIcfIidSelected = false;
    localStorage.setItem('selectedMenu', 'MedicalECF');
  }

  onEcfChoiceSevenClicked() {
    this.isKbProgramSelected = false;
    this.isChoicesGroupOneSelected = false;
    this.isChoicesHcbsSelected = false;
    this.isEcfChoiceFourSelected = false;
    this.isEcfChoiceFiveSelected = false;
    this.isEcfChoiceSixSelected = false;
    this.isEcfChoiceSevenSelected = true;
    this.isEcfChoiceEightSelected = false;
    this.isPaceSelected = false;
    this.cacSelected = false;
    this.isIcfIidSelected = false;
    localStorage.setItem('selectedMenu', 'MedicalECF');
  }

  onEcfChoiceEightClicked() {
    this.isKbProgramSelected = false;
    this.isChoicesGroupOneSelected = false;
    this.isChoicesHcbsSelected = false;
    this.isEcfChoiceFourSelected = false;
    this.isEcfChoiceFiveSelected = false;
    this.isEcfChoiceSixSelected = false;
    this.isEcfChoiceSevenSelected = false;
    this.isEcfChoiceEightSelected = true;
    this.isPaceSelected = false;
    this.cacSelected = false;
    this.isIcfIidSelected = false;
    localStorage.setItem('selectedMenu', 'MedicalECF');
  }

  onPaceClicked() {
    this.isKbProgramSelected = false;
    this.isChoicesGroupOneSelected = false;
    this.isChoicesHcbsSelected = false;
    this.isEcfChoiceFourSelected = false;
    this.isEcfChoiceFiveSelected = false;
    this.isEcfChoiceSixSelected = false;
    this.isEcfChoiceSevenSelected = false;
    this.isEcfChoiceEightSelected = false;
    this.isPaceSelected = true;
    this.cacSelected = false;
    this.isIcfIidSelected = false;

  }

  onIcfIidClicked(){
    this.isKbProgramSelected = false;
    this.isChoicesGroupOneSelected = false;
    this.isChoicesHcbsSelected = false;
    this.isEcfChoiceFourSelected = false;
    this.isEcfChoiceFiveSelected = false;
    this.isEcfChoiceSixSelected = false;
    this.isEcfChoiceSevenSelected = false;
    this.isEcfChoiceEightSelected = false;
    this.isPaceSelected = false;
    this.cacSelected = false;
    this.isIcfIidSelected = true;
    localStorage.setItem('selectedMenu', 'MedicalICF');
  }

  onCacClicked() {
    this.isKbProgramSelected = false;
    this.isChoicesGroupOneSelected = false;
    this.isChoicesHcbsSelected = false;
    this.isEcfChoiceFourSelected = false;
    this.isEcfChoiceFiveSelected = false;
    this.isEcfChoiceSixSelected = false;
    this.isEcfChoiceSevenSelected = false;
    this.isEcfChoiceEightSelected = false;
    this.isPaceSelected = false;
    this.cacSelected = true;
    this.isIcfIidSelected = false;

  }
}
