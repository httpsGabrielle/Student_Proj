import { Component, OnInit } from '@angular/core';
import { Teacher } from  '../teacher';
import { TeacherService } from '../teacher.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  selectedTeacher?: Teacher;
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService, private messageService: MessageService) { }
  
  ngOnInit(): void {
    this.getTeachers();
  }
  onSelect(teacher: Teacher): void {
    this.selectedTeacher = teacher;
    this.messageService.add(`Id do professor selecionado=${teacher.RA}`);
    }
    getTeachers(): void {
      this.teacherService.getTeachers()
          .subscribe(teachers => this.teachers = teachers);
    }
} 
 