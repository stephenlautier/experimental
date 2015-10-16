import * as angular from "angular";
import {default as app} from "./app.module"; 

const id = "app.sample";

app.config(() => {
	console.log(`${id}::config`);
});

app.run(() => {
	console.log(`${id}::run`);
})

angular.element(document).ready(function() {
	angular.bootstrap(<any>document.body, [app.name], {
		//strictDi: true
	});
});

export default app;