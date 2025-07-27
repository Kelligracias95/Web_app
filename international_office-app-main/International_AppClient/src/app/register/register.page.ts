import { Component, NgModule, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from '../components/translation/translation.component';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    username: '',
    email: '',
    password: '',
  };
  
  successMessage: string = ""; 

  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit() {
  }

  register() {
    this.authService.register(this.user).subscribe(
      (response) => {
        
        this.successMessage = 'Successfull Registration';
        this.router.navigate(['/home']);
        console.log(response);

       

        this.user = {
          username: '',
          email: '',
          password: '',
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
