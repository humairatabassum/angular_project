import { Component } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTask = '';
  todoList: Todo[] = [];
  todo: Todo = {
    title: '',
    id: null,
    done: false,
  };

  addTask() {
    this.todo.id = this.todoList.length + 1;
    this.todoList.push({ ...this.todo });
    console.log(this.todoList);

    this.todo = {
      title: '',
      id: null,
      done: false,
    };
  }

  editTask(todo: Todo): void {
    this.todo = todo;
  }
}
