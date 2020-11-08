import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http/';
import {Observable, of} from 'rxjs';
import { EnvService } from '../../_shared/utility/env.service';
import {UserRoleDetail} from '../../_shared/model/UserRoleDetail';

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  public serverApiUrl: any;
  constructor(private http: HttpClient,
              private envService: EnvService) {
    this.serverApiUrl = this.envService.apiUrl();
  }

  createUserRole(payload:any) : Observable<any>{
    return this.http.post<any>(`${this.serverApiUrl.ADMIN_API_URL}/admin/manageRoles/createRole`, payload, {
      headers: {'Content-Type': 'application/json'}
    });
  }

  getStatusValues() : Observable<any> {
    return this.http.get<any>(`${this.serverApiUrl.API_URL}/api/staticData/getStaticDataValue?dataNameKey=USER_ROLE_STATUS`, {
      headers : {'Content-Type': 'application/json'}
    });
  }


  editUserRole(payload: any) : Observable<any>{
    return this.http.post<any>(`${this.serverApiUrl.ADMIN_API_URL}/admin/manageRoles/editRole`, payload, {
      headers: {'Content-Type': 'application/json'}
    });
  }

  getUserRoles(userId: string, entityCode: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverApiUrl.ADMIN_API_URL}/admin/manageRoles/getRoles?userId=${userId}&entityCode=${entityCode}`, {
      headers : {'Content-Type': 'application/json'}
    });
  }

  getUserRoleDetailsByRoleId(roleId: number): Observable<any> {
    console.log("roleId ", roleId);
    return this.http.get<any>(`${this.serverApiUrl.ADMIN_API_URL}/admin/adminviewroles/viewroles/${roleId}`, {
      headers : {'Content-Type': 'application/json'}
  });
  }
}
