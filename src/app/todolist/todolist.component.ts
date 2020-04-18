import { Component, OnInit } from '@angular/core';

interface Todo {
  libelle: string;
  isDone: boolean;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todos: Todo[] = [
    { libelle: 'lait', isDone: false},
    { libelle: 'café', isDone: true},
  ];

  todo: string;

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    if(this.todo) {
      this.todos = [...this.todos, { libelle: this.todo, isDone: false}];
      this.todo = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1); // attention ! voir la notion d'immutabilité et essayez d'améliorer ce code
  }

  toggleTodo(index: number) {
    this.todos[index].isDone = !this.todos[index].isDone;
  }

}
