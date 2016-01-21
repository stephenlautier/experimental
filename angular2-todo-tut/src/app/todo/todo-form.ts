import {Component, Output, EventEmitter} from "angular2/core";
import {Todo} from "./todo.model";
import config from "../app.config";

@Component({
	selector: "todo-form",
	templateUrl: `${config.basePath}/todo/todo-form.html`
})
export class TodoForm {
	@Output() newTask = new EventEmitter<Todo>();
	task = "";

	addTodo() {
		if (this.task) {
			this.newTask.emit({ text: this.task, isDone: false });
		}
		this.task = "";
	}
}