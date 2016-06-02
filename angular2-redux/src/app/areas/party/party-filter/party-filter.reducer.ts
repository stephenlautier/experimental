import {ActionReducer} from "@ngrx/store";
import {PersonState} from "../people.state";

export const partyFilterActions = {
	showAttending: "show-attending",
	showAll: "show-all",
	showGuests: "show-guests"
};

export const partyFilterReducer: ActionReducer<any> =
	(state = (person: PersonState) => person.attending, action) => {
		switch (action.type) {
			case partyFilterActions.showAttending:
				return (person: PersonState) => person.attending;
			case partyFilterActions.showAll:
				return (person: PersonState) => person.attending;
			case partyFilterActions.showGuests:
				return (person: PersonState) => person.guests;
			default:
				return state;
		}
	};