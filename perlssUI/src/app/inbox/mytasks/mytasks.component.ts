import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AssignUserComponent} from '../assign-user/assign-user.component';
import {TaskDetailsComponent} from '../task-details/task-details.component';
import { UpdateTaskComponent } from '../update-task/update-task.component';

export interface Task {
  module: string;
  recordId: string;
  taskQueue: string;
  dueDate : string;
  status: string;
  priority:string;

}

const ELEMENT_DATA: Task[] = [
  {module: 'Jessica Jones', taskQueue: 'queue-1', recordId:'342-43-3221', dueDate:'RF45643289',status:'Assigned', priority:'High'},
  {module: 'Alex dssd',  taskQueue: 'queue-2', recordId:'342-43-3342', dueDate:'RF45643289', status:'New', priority:'High'},
  {module: 'Module New',  taskQueue: 'queue-2', recordId:'342-43-3352', dueDate:'RF45643289', status:'In-Progress', priority:'High'}
];

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class MytasksComponent implements OnInit {

  displayedColumns: string[] = ['module','taskQueue', 'recordId','dueDate','status', 'priority'];
  checkboxColumn: string = 'select';
  checkboxColumnHeader:string = 'Select';
  selectableCheckbox: string[] = ['Assigned','New'];
  dataSource: MatTableDataSource<Task> = new MatTableDataSource(ELEMENT_DATA);
  expandedElement;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  selection = new SelectionModel<Task>(true, []);
  @Output() emitTasksCount = new EventEmitter();
  isAnyTaskSelected: boolean = false;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
     // this.emitTasksCount.emit(this.dataSource.data.length);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    setTimeout (() => {
      this.emitTasksCount.emit(this.dataSource.data.length);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showUpdateTaskDialog() {
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.minWidth = '800px';
    dialogConfig.maxWidth = '500px';
    dialogConfig.minHeight = '405px';
    this.matDialog.open(UpdateTaskComponent, dialogConfig);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.filter(row => this.selectableCheckbox.indexOf(row.status) !== -1).length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => {
        if(this.selectableCheckbox.indexOf(row.status) !== -1) {
          this.selection.select(row);
        }
      });
    this.isAnyTaskSelected = this.selection.selected && this.selection.selected.length > 0;
  }

  handleSelection(event, row) {
    if(event) {
      this.selection.toggle(row);
      this.isAnyTaskSelected = this.selection.selected && this.selection.selected.length > 0;
    }
  }

  toggleSelectDisplay() {
    if(this.displayedColumns.indexOf(this.checkboxColumn) > -1) {
      this.displayedColumns.shift();
      this.checkboxColumnHeader = 'Select';
      this.selection.clear();
      this.isAnyTaskSelected = false;
    } else {
      this.displayedColumns = [...[this.checkboxColumn],...this.displayedColumns];
      this.checkboxColumnHeader = 'Hide';
    }

    this.selection.selected.forEach(s => console.log(s.recordId));
  }

  openTaskDetailsDialog() {
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.minWidth = '250px';
    dialogConfig.maxWidth = '500px';
    dialogConfig.minHeight = '405px';
    dialogConfig.panelClass = 'edit-profile-container';
    this.matDialog.open(TaskDetailsComponent, dialogConfig);
  }

  showAssignUserDialog() {
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.minWidth = '800px';
    dialogConfig.minHeight = '405px';
    dialogConfig.panelClass = 'edit-profile-container';
    this.matDialog.open(AssignUserComponent, dialogConfig);
  }

}
