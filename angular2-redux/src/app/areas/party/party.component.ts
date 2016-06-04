import {Component} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Store} from "@ngrx/store";
import {LoggerFactory, ILog} from "ssv-ng2-core";

import {AppState} from "../../app.state";
import {PartyFilterSelectComponent, PartyFilterState, PartyFilterActions} from "./party-filter/party-filter";
import {PersonActions} from "./person.actions";
import {PersonState} from "./person.state";
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
	filter$: Observable<PartyFilterState>;

	private id = "partyContainerComponent";
	private logger: ILog;
	private start = Math.floor(Math.random() * (5000));

	constructor(
		loggerFactory: LoggerFactory,
		private partyFilterActions: PartyFilterActions,
		private personActions: PersonActions,
		private store: Store<AppState>
	) {
		this.logger = loggerFactory.getInstance(this.id);
		this.logger.debug("ctor");

		this.people$ = this.store.select<PersonState[]>("people");
		this.filter$ = this.store.select<PartyFilterState>("partyFilter");
	}

	addPerson(name: string): void {
		this.store.dispatch(this.personActions.addPerson(this.getNextId(), name));
	}

	addGuest(id: number) {
		this.store.dispatch(this.personActions.addGuest(id));

	}

	removeGuest(id: number) {
		this.store.dispatch(this.personActions.removeGuest(id));
	}

	removePerson(id: number) {
		this.store.dispatch(this.personActions.removePerson(id));
	}

	toggleAttending(id: number) {
		this.store.dispatch(this.personActions.toggleAttending(id));
	}

	updateFilter(filter: string) {
		this.store.dispatch(this.partyFilterActions.updateFilter(filter));
	}

	getNextId(): number {
		return ++this.start;
	}
}