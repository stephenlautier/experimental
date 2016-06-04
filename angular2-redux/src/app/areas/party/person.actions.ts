import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";

export const personActions = {
	addPerson: "add-person",
	addGuest: "add-guest",
	removeGuest: "remove-guest",
	removePerson: "remove-person",
	toggleAttending: "toggle-attending",
};

@Injectable()
export class PersonActions {

	addPerson(id: number, name: string): Action {
		return {
			type: personActions.addPerson,
			payload: {
				id: id,
				name: name
			}
		};
	}

	addGuest(id: number): Action {
		return {
			type: personActions.addGuest,
			payload: id
		};
	}

	removeGuest(id: number): Action {
		return {
			type: personActions.removeGuest,
			payload: id
		};
	}

	removePerson(id: number): Action {
		return {
			type: personActions.removePerson,
			payload: id
		};
	}

	toggleAttending(id: number): Action {
		return {
			type: personActions.toggleAttending,
			payload: id
		};
	}
}