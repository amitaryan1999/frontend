import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private baseurl:string="http://localhost:8084/tour/addTour"

  constructor(private http:HttpClient) { }

 addTourdata(sdata:any)

 {

  return this.http.post(`${this.baseurl}`,sdata)

 }
}
