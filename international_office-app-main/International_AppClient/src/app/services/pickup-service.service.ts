import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

export interface PickupService {
  id?: string;
  fullName: string,
  
  dormitoryAddress: string,
  apartmentNumber: number, 
  arrivalDateTime: Date,
  time:string,
  phoneNumber: number, 
  email: string
 
}

@Injectable({
  providedIn: 'root'
})
export class PickupServiceService {
  pickupServiceCreated$: any;

  constructor(private http: HttpClient) {}

  API = `${environment.API}/api/pickup-services`;

  createPickupService(fullName: string, dormitoryAddress: string,
    apartmentNumber:number,arrivalDateTime:Date,time:Date,phoneNumber:number,email:string) {
    return this.http.post<PickupService[]>(this.API, {
      data: {
        fullName,
        
        dormitoryAddress,
        apartmentNumber,
        arrivalDateTime,
        time,
        phoneNumber,
        email
      }
    });
  }
}