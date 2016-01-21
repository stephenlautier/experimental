import {Component, Input} from "angular2/core";
import {Todo} from "./todo.model";
import config from "../app.config";

@Component({
	selector: "todo-list",
	styles: [`
		.done-true {
			text-decoration: line-through;
			color: grey;
		}
	`],
	templateUrl: `${config.basePath}/todo/todo-list.html`,
})
export class TodoList {
	@Input() todos: Todo[];
}