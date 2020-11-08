import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {InboxService} from '../services/inbox.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {

  taskDetails:any;
  closeTaskForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<UpdateTaskComponent>, private inboxService: InboxService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.closeTaskForm = this.fb.group({
      notes: ['',[Validators.required]]
    });
    this.loadTaskDetails();

  }

  loadTaskDetails() {
    //MOCK
    const taskId = 2345;
    this.inboxService.getTaskDetail(taskId).subscribe(res => {
      this.taskDetails = res;
      console.log("taskdetails ", this.taskDetails);
    });
  }

  get f() { return this.closeTaskForm.controls; }

  closeTask() {
    if (this.closeTaskForm.invalid) {
      return;
    }
    //MOCK
    const taskId = 1;
    this.inboxService.updateTaskClosure(taskId,this.f.notes.value ).subscribe(res =>
      console.log(res));
      this.loadTaskDetails();
  }


  close()  {
    this.dialogRef.close();
  }


}
