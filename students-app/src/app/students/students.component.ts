import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  visible: boolean = true;
  students: Student[] = [];
  selectedStudent?: Student; 
  lastName: string = ''
  firstName: string = ''
  math: number = 0
  physics: number = 0
  chemistry: number = 0
  biology: number = 0
  history: number = 0
  
  constructor(
    private studentService: StudentService
    ) { }

  ngOnInit(): void {
    this.getStudents(); 
  }

  onSelect(student: Student) : void {
    this.selectedStudent = student;
  }

  changeVisibility() {
    this.visible = !this.visible;
  }

  getStudents() {
    this.studentService.getStudents()
            .subscribe(students => this.students = students);
  }

  addStudent() {
    // if(this.firstName && this.lastName) {
      this.studentService.addStudent({
        lastName: this.lastName,
        firstName: this.firstName,
        marks: {
          Math : this.math,
          Physics: this.physics,
          Chemistry: this.chemistry,
          Biology: this.biology,
          History: this.history
        }
      })
    // }
    // this.goBack()
  }

  removeStudent(student: Student) {
    this.studentService.removeStudent(student)
            .subscribe(student => {
              this.getStudents();
            });
  }


}

