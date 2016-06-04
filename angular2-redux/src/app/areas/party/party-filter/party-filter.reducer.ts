import {ActionReducer} from "@ngrx/store";

import {PersonState} from "../person.state";
import {PartyFilterState} from "./party-filter.state";
import {partyFilterActions} from "./party-filter.actions";

export const partyFilterReducer: ActionReducer<PartyFilterState> =
	(state = (person: PersonState) => true, action) => {
		switch (action.type) {
			case partyFilterActions.showAttending:
				return (person: PersonState) => person.attending;
			case partyFilterActions.showAll:
				return (person: PersonState) => true;
			case partyFilterActions.showGuests:
				return (person: PersonState) => person.guests > 0;
			default:
				return state;
		}
	};