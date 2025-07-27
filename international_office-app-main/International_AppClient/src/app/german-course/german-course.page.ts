import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { GermanCourse,GermanCourseService } from '../services/german-course.service';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from '../components/translation/translation.component';





@Component({
  selector: 'app-german-course',
  templateUrl: './german-course.page.html',
  styleUrls: ['./german-course.page.scss'],
})
export class GermanCoursePage implements OnInit {

  successMessage: string = ""; 


  germanCourses: GermanCourse = {
    surname:"",
    firstname:"",
    matrikelnummer:0,
    courseTitle: "",
    courseCode: 0,
    studyCourseProgramm: "",
    professorName: "",
    
  };
  translateService: any;

  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private germanCourseService: GermanCourseService
  ) {}

  ngOnInit() {

    
  }


  

  createGermanCourse() {
    this.germanCourseService
      .createGermanCourse(this.germanCourses. surname, 
                          this.germanCourses.firstname, 
                          this.germanCourses.matrikelnummer, 
                          this.germanCourses.courseTitle, 
                         this.germanCourses.courseCode, 
                         this.germanCourses.studyCourseProgramm,
                         this.germanCourses.professorName)
      .subscribe(
        (res: any) => {
          console.log('Success:', res);
          this.successMessage = 'German Course  successfully submitted!';
          this.location.go(this.location.path())

          this.germanCourses = {
            surname:"",
            firstname:"",
            matrikelnummer:0,
            courseTitle: "",
            courseCode: 0,
            studyCourseProgramm: "",
            professorName: "",
            
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
  }}

