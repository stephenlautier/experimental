import {peopleReducer} from "./areas/party/party";
import {partyFilterReducer} from "./areas/party/party";

export let appReducer = {
	people: peopleReducer,
	partyFilter: partyFilterReducer
};

export default appReducer;