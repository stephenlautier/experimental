import {PersonState, PartyFilterState} from "./areas/party/party";

export interface AppState {
	people: PersonState[];
	partyFilter: PartyFilterState;
}