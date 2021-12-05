import { Injectable } from '@angular/core';
import { STUDENTS } from './STUDENTS';
import { Student } from './Student';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

    constructor() { }

  getStudents(): Observable<Student[]> {
    return of(STUDENTS);
  }

  addStudent(student: Student) {
    // const id = STUDENTS[STUDENTS.length - 1]?.id as number
    STUDENTS.push(student)
  }

  removeStudent(student: Student) : Observable<Student> {
    STUDENTS.splice(STUDENTS.indexOf(student), 1);
    return of(student);
  }

}
