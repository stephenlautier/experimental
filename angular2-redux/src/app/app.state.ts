import {PersonState} from "./areas/party/party";

export interface AppState {
	people: PersonState[];
	partyFilter: any;
}