import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Teacher } from  './teacher';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private http: HttpClient, private messageService: MessageService) { }
  private teachersUrl = 'http://localhost:3001/teachers';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  private log(message: string) {
    this.messageService.add(`Student Service: ${message}`);
  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teachersUrl);
  }
  
} 
   