import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }
}
