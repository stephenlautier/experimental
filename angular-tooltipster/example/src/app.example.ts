//import {default as angular} from 'angular';
import * as angular from "angular";

import {default as app} from "./app.module"; 
//import {default as sampleDirective} from "./tooltip-sample.directive";
//import {TooltipSampleController} from "./tooltip-sample.directive";
//import {default as sampleDirective} from "./tooltip-sample";

const id = "app.example";


//app.controller("tooltipSampleController", TooltipSampleController);

// let config = {
// 	basePath: "/"
// }
// 
// app.constant("config", config)

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