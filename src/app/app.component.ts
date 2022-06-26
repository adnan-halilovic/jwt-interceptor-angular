import { Component } from '@angular/core';
import { UserService } from './core/services/user.service';
import { ApiService } from './http/api.service';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todo: Todo = {
    userId: 0,
    id: 0,
    title: '',
    completed: false,
  };

  constructor(private api: ApiService, private userService: UserService) {}

  getTodo() {
    this.api.getTodo(2).subscribe((data) => (this.todo = data));
  }

  setToken(){
    this.userService.setToken();
  }

  removeToken(){
    this.userService.removeToken();
  }
}
