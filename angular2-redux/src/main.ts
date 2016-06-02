import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_PROVIDERS} from "@angular/router";
import {provideStore} from "@ngrx/store";

import appReducer from "./app/app.reducer";
import {AppComponent} from "./app/app.component";

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	provideStore(appReducer)
]);