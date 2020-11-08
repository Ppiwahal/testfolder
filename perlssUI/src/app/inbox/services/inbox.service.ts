import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http/';
import { Observable, of } from 'rxjs';
import { EnvService } from '../../_shared/utility/env.service';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  public serverApiUrl: any;
  constructor(private http: HttpClient,
              private envService: EnvService) {
    this.serverApiUrl = this.envService.apiUrl();
  }

  getTaskDetail(taskId: number): Observable<any>{
    return  this.http.get<any>(`${this.serverApiUrl.ADMIN_API_URL}/adminTask/getTaskDetail?taskId=${taskId}`);
  }

  getAssignTaskDetails(taskMasterId: number): Observable<any>{
    return  this.http.get<any>(`${this.serverApiUrl.ADMIN_API_URL}/adminTask/getAssignTaskDetails?taskMasterId=${taskMasterId}`);
  }

  updateTaskClosure(taskId: number,closureDetaildesc: string): Observable<any>{
    return  this.http.post<any>(`${this.serverApiUrl.ADMIN_API_URL}/adminTask/closeTask?taskId=${taskId}&closuredetaildesc=${closureDetaildesc}`, null, {
      headers: {'Content-Type': 'application/json'}
    });
  }

  reassignTask(taskId: number,assignedUserId: string, entityId: number): Observable<any>{
    return  this.http.post<any>(`${this.serverApiUrl.ADMIN_API_URL}/adminTask/reassignTask?taskId=${taskId}&assignedUserId=${assignedUserId}&entityId=${entityId}`, null, {
      headers: {'Content-Type': 'application/json'}
    });
  }

  sendBackToQueue(taskId: number) {
    return  this.http.post<any>(`${this.serverApiUrl.ADMIN_API_URL}/adminTask/sendBackToQueue?taskId=${taskId}`, null, {
      headers: {'Content-Type': 'application/json'}
    });

  }


}
