import "bootstrap/css/bootstrap.css!";
import {Component} from "angular2/core";
import {Todo, TodoList, TodoForm} from "./todo/todo";
import config from "./app.config";

@Component({
	selector: "app-todo",
	templateUrl: `${config.basePath}/app.html`,
	directives: [TodoList, TodoForm]
})
export class AppComponent {

	todos: Todo[] = [
		{ text: "learn angular2", isDone: false },
		{ text: "prepare angular2 - hello world", isDone: true },
		{ text: "do presentation", isDone: false }
	];

	get remaining() {
		return this.todos.reduce((count: number, todo: Todo) => count + +!todo.isDone, 0);
	}

	archive(): void {
		let oldTodos = this.todos;
		this.todos = [];
		for (let todo of oldTodos) {
			if (!todo.isDone) {
				this.todos.push(todo);
			}
		}
	}

	addTask(task: Todo): void {
		this.todos.push(task);
	}
}