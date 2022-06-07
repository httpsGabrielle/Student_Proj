import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TEACHERS } from './mock-teachers';
import { Teacher } from  './teacher';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private messageService: MessageService) { }

  getTeachers(): Observable<Teacher[]> {
    const teachers = of(TEACHERS);
    this.messageService.add('Teacher Service: fetched teachers');
    return teachers;
  }
  
}
   