import {Component, Output, EventEmitter, ChangeDetectionStrategy} from "@angular/core";
import {partyFilterActions} from "./party-filter.reducer";

@Component({
	moduleId: module.id,
	selector: "filter-select",
	templateUrl: "party-filter-select.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyFilterSelectComponent {
	filters = [
		{ friendly: "All", action: partyFilterActions.showAll },
		{ friendly: "Attending", action: partyFilterActions.showAttending },
		{ friendly: "Attending w/ Guests", action: partyFilterActions.showGuests }
	];
	@Output() updateFilter: EventEmitter<string> = new EventEmitter<string>();
}