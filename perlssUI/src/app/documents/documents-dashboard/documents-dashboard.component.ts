import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Form, FormBuilder, FormControl, FormGroup,Validators,FormsModule, ReactiveFormsModule} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatPaginator} from '@angular/material/paginator';
import { DocumentsService } from '../../core/services/documents/documents.service';

@Component({
  selector: 'app-documents-dashboard',
  templateUrl: './documents-dashboard.component.html',
  styleUrls: ['./documents-dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DocumentsDashboardComponent implements OnInit {
  myForm: FormGroup;
  searchForm: FormGroup;
  displayedColumns: string[] = ['name','ssn', 'referralId','paeId','appointmentType', 'appointmentStatus','appointmentDate'];
  dataSource: MatTableDataSource<any>;
  expandedElement;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      searchText:[''],
      refId: [''],
      paeId: [''],
      appealId:[''],
      paeStatus:['']
    });
  }

  ngAfterViewInit() {
    if(this.data && this.data.length) {
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
    }
   //this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async executeSearch() {
  // try {
  //   let data = await this.appointmentService.searchAppointment(this.myForm.value);
  //   if(data['status'] === 200) {
  //     this.data = data['body'];
  //     this.dataSource = new MatTableDataSource(data['body']);
  //     console.log(this.dataSource);
  //     this.dataSource.paginator = this.paginator;
  //   }
  // }catch (err) {
  //   console.log(err);
  // }
  console.log('Test');
  }

}
