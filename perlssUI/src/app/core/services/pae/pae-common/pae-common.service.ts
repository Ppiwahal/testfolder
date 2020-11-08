import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaeCommonService {


constructor() { }

programName: any;
age = 21;
paeId: any;
livingArrangement: any;
county = 'Hamilton';


getProgramName() {
  return this.programName;
}

setProgramName(programName){
  this.programName = programName;
}

setAge(age){
  this.age = age;
}

getAge(){
  return this.age;
}

getPaeId(){
  return this.paeId;
}
setPaeId(paeID){
  this.paeId = paeID;
}

getLivingArrangement(){
  return this.livingArrangement;
}
setLivingArrangement(livingArrangement){
  this.livingArrangement = livingArrangement;
}

setCounty(county){
  this.county = county;
}

getCounty() {
  return this.county;
}

}
