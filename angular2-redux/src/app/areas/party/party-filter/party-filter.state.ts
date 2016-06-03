import {PersonState} from "../person.state";

export interface PartyFilterState {
	(state: PersonState): boolean;
}