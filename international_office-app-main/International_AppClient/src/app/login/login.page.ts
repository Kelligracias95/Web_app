import { Component, NgModule, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from '../components/translation/translation.component';






@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials = {
    identifier: '',
    password: '',
  } 
  successMessage: string | undefined;

  
  
  
  constructor(private authService: AuthService,private router: Router,
    ) {}


  

    ngOnInit() {
      
    }




  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        
        this.successMessage = 'Login successfully!';
        this.router.navigate(['/home']);
        console.log('Login successful:', response);

        this.credentials = {
          identifier: '',
          password: '',
        } 
        


       },
      (error) => {
        console.error('Login Error:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Status Text:', error.statusText);
          console.error('Response:', error.error);


        }
      }
      
    );

  

  }
 
 
  
  
}







