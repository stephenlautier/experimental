import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";

export const partyFilterActions = {
	showAttending: "show-attending",
	showAll: "show-all",
	showGuests: "show-guests"
};

@Injectable()
export class PartyFilterActions {

	updateFilter(filter: string): Action {
		return {
			type: filter
		};
	}

}