import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';


export interface GermanCourse {
  id?: string;
  surname:string;
  firstname:string;
  matrikelnummer:number;
  courseTitle: string;
  courseCode: number;
  studyCourseProgramm: string;
  professorName: string;
 
}

@Injectable({
  providedIn: 'root'
})
export class GermanCourseService {

  germanCoursecreated$:any;

  constructor(private http: HttpClient) {}

  API = `${environment.API}/api/german-coursees`;

  createGermanCourse( surname:string, firstname:string,matrikelnummer:number,courseTitle: string,courseCode: number, studyCourseProgramm: string, professorName:string) {
    return this.http.post<GermanCourse[]>(this.API, {
      data: {
        surname,
        firstname,
        matrikelnummer,
      courseTitle,
      courseCode,
      studyCourseProgramm,
      professorName
      }
    });
  }

  
}
