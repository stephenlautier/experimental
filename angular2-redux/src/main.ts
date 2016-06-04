import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_PROVIDERS} from "@angular/router";
import {provideStore, combineReducers} from "@ngrx/store";
import {compose} from "@ngrx/core/compose";
import {storeLogger} from "ngrx-store-logger";

import appReducer from "./app/app.reducer";
import {AppComponent} from "./app/app.component";

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	provideStore(
		compose(
			storeLogger(),
			combineReducers
		)(appReducer)
	)
]);