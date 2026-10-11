
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  newTodo = '';

  todos: Todo[] = [
    { id: 1, title: 'Learn Angular components', completed: true },
    { id: 2, title: 'Understand data binding', completed: false },
    { id: 3, title: 'Build a Todo application', completed: false }
  ];

  addTodo(): void {
    console.log('Adding todo:', this.newTodo);
    const title = this.newTodo;

    if (!title) {
      return;
    }

    const todo: Todo = {
      id: Date.now(),
      title: title,
      completed: false
    };

    this.todos.push(todo);
    this.newTodo = '';
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);

    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
