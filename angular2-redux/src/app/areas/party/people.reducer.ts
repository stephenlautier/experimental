import {ActionReducer} from "@ngrx/store";
import {PersonState} from "./person.state";
import {personActions} from "./person.actions";

const details: ActionReducer<PersonState> = (state, action) => {
	switch (action.type) {
		case personActions.addGuest:
			if (state.id === action.payload) {
				return Object.assign({}, state, { guests: state.guests + 1 });
			}
			return state;
		case personActions.removeGuest:
			if (state.id === action.payload) {
				return Object.assign({}, state, { guests: state.guests - 1 });
			}
			return state;
		case personActions.toggleAttending:
			if (state.id === action.payload) {
				return Object.assign({}, state, { attending: !state.attending });
			}
			return state;
		default:
			return state;
	}
};

export const peopleReducer: ActionReducer<PersonState[]> = (state = [], action) => {
	switch (action.type) {
		case personActions.addPerson:
			return [
				...state,
				Object.assign({}, { id: action.payload.id, name: action.payload.name, guests: 0, attending: false })
			];
		case personActions.removePerson:
			return state
				.filter(person => person.id !== action.payload);
		case personActions.addGuest:
			return state.map(person => details(person, action));
		case personActions.removeGuest:
			return state.map(person => details(person, action));
		case personActions.toggleAttending:
			return state.map(person => details(person, action));
		default:
			return state;
	}
};