import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { PickupService, PickupServiceService } from 'src/app/services/pickup-service.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';
import { formatDate } from '@angular/common';

import { TranslationComponent } from 'src/app/components/translation/translation.component';

@Component({
  selector: 'app-pickup-service',
  templateUrl: 'pickup-service.page.html',
  styleUrls: ['pickup-service.page.scss'],
})
export class PickupServicePage implements OnInit {
  successMessage: string = ""; 
 pickupServices: PickupService = {
    fullName: "",
    
    dormitoryAddress: "",
    apartmentNumber: 0,
    arrivalDateTime: new Date(),
    time:"",
    phoneNumber: 0,
    email: "",
  };

    constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private pickupServiceService: PickupServiceService
  ) {}
  ngOnInit() { }

  createPickupService() {
    this.pickupServices.time = formatDate(new Date(), 'HH:mm:ss.SSS', 'en-US');
    
    this.pickupServiceService
      .createPickupService(
        this.pickupServices.fullName,
        this.pickupServices.dormitoryAddress,
        this.pickupServices.apartmentNumber,
        this.pickupServices.arrivalDateTime,
        this.pickupServices.time as any, 
        this.pickupServices.phoneNumber,
        this.pickupServices.email
      )
      .subscribe(
        (res: any) => {
          console.log('Success:', res);
          this.successMessage = 'Pickup-Service created successfully!';
          this.location.go(this.location.path());
          this.pickupServices = {
            fullName: "",
            dormitoryAddress: "",
            apartmentNumber: 0,
            arrivalDateTime: new Date(),
            time: "",
            phoneNumber: 0,
            email: "",
          };
        },
        (error) => {
          console.error('Error:', error);
          if (error instanceof HttpErrorResponse) {
            console.error('Status:', error.status);
            console.error('Status Text:', error.statusText);
            console.error('Response:', error.error);
          }
          
        }
      );
  }
}