import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Notification {
  notificationName: string;
  recordId: string;
  receivedTimestamp: string;
  status : string;

}

const ELEMENT_DATA: Notification[] = [
  {notificationName: 'Jessica Jones', recordId: 'queue-1', receivedTimestamp:'342-43-3221', status:'Assigned'},
  {notificationName: 'Alex dssd',  recordId: 'queue-2', receivedTimestamp:'342-43-3342', status:'New'},
  {notificationName: 'Alex dssd',  recordId: 'queue-2', receivedTimestamp:'342-43-3342', status:'In-Progress'}

];

@Component({
  selector: 'app-my-alerts-notifications',
  templateUrl: './my-alerts-notifications.component.html',
  styleUrls: ['./my-alerts-notifications.component.scss']
})
export class MyAlertsNotificationsComponent implements OnInit {
  displayedColumns: string[] = ['notificationName','recordId', 'receivedTimestamp','status','viewAction'];
  dataSource: MatTableDataSource<Notification> = new MatTableDataSource(ELEMENT_DATA);
  @Output() emitNotificationCount = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
      //this.emitNotificationCount.emit(this.dataSource.data.length);
  }

  ngAfterViewInit() {
    setTimeout (() => {
      this.emitNotificationCount.emit(this.dataSource.data.length);
    });
  }

}
