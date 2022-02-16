import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

readonly APIUrl="http://localhost:57823/api/employee/";
  
  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl);
  }

  getDep(id: string): Observable<any> {
    return this.http.get<any>(this.APIUrl+id);
  } 

  addEmployee(emp: any){ 
     return this.http.post(this.APIUrl,emp);
  }

  updateEmployee(emp: any){ 
    return this.http.put(this.APIUrl,emp);
  }

  deleteEmployee(emp: any){ 
    return this.http.delete(this.APIUrl+emp);
  }
}
