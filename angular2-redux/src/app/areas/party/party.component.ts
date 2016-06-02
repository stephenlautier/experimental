import {Component} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Store} from "@ngrx/store";
import {LoggerFactory, ILog} from "ssv-ng2-core";

import {AppState} from "../../app.state";
import {PartyFilterSelectComponent} from "./party-filter/party-filter";
import {personActions} from "./people.reducer";
import {PersonState} from "./people.state";
import {PersonList} from "./person-list.component";
import {PersonInput} from "./person-input.component";


@Component({
	moduleId: module.id,
	templateUrl: "party.component.html",
	directives: [
		PersonInput,
		PersonList,
		PartyFilterSelectComponent
	]
})
export class PartyContainerComponent {

	title = "Party";
	people$: Observable<PersonState[]>;
	filter$: Observable<any>;

	private id = "partyContainerComponent";
	private logger: ILog;
	private start = Math.floor(Math.random() * (5000));

	constructor(
		loggerFactory: LoggerFactory,
		private store: Store<AppState>
	) {
		this.logger = loggerFactory.getInstance(this.id);
		this.logger.debug("ctor");

		this.people$ = this.store.select<PersonState[]>("people");
		this.filter$ = this.store.select<any>("partyFilter");
	}

	addPerson(name: string): void {
		this.store.dispatch({
			type: personActions.addPerson,
			payload: {
				id: this.getNextId(),
				name: name
			}
		});
	}

	addGuest(id: number) {
		this.store.dispatch({ type: personActions.addGuest, payload: id });
	}

	removeGuest(id: number) {
		this.store.dispatch({ type: personActions.removeGuest, payload: id });
	}

	removePerson(id: number) {
		this.store.dispatch({ type: personActions.removePerson, payload: id });
	}

	toggleAttending(id: number) {
		this.store.dispatch({ type: personActions.toggleAttending, payload: id });
	}

	getNextId(): number {
		return ++this.start;
	}
}