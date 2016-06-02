import {Component, Output, EventEmitter, ChangeDetectionStrategy} from "@angular/core";
import {Control} from "@angular/common";

@Component({
	moduleId: module.id,
	selector: "person-input",
	templateUrl: "person-input.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonInput {
	@Output() addPerson = new EventEmitter();

	add(personInput: Control) {
		this.addPerson.emit(personInput.value);
		personInput.value = "";
	}
}