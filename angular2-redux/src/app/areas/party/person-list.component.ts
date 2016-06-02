import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from "@angular/core";
import {PersonState} from "./people.state";

@Component({
	moduleId: module.id,
	selector: "person-list",
	templateUrl: "person-list.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonList {
	/*
		"dumb" components do nothing but display data based on input and
		emit relevant events back up for parent, or "container" components to handle
	*/
	@Input() people: PersonState[];
	// for now, we will pass filter down and apply
	@Input() filter: any;
	@Output() addGuest = new EventEmitter();
	@Output() removeGuest = new EventEmitter();
	@Output() removePerson = new EventEmitter();
	@Output() toggleAttending = new EventEmitter();
}
