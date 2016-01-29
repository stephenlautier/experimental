
import * as angular from "angular";

import {Config} from "./app.config";
import {tooltipSampleDirective} from "./tooltip-sample.directive";
import {consts as angularTooltipsterConsts, TooltipProvider} from "angular-tooltipster";
import {coreConsts} from "ssv-angular-core";

debugger
console.log("app.module:: pre-module")
let app = angular.module("ssv-lab", [
	angularTooltipsterConsts.moduleName,
	coreConsts.moduleName
]);


app.constant("config", new Config());
//app.controller("tooltipSampleController",TooltipSampleController )
app.directive("ssvTooltipSample", tooltipSampleDirective);

app.config((tooltipProvider: TooltipProvider) => {

	tooltipProvider.setDefaults({
		//theme: "flat-ui",
		useTranslate: true
	});


});
	
/*@ngInject*/
app.config(
	($translateProvider: angular.translate.ITranslateProvider) => {
		$translateProvider.translations("en", {
			"hello": "Hey guys"
		});
	}
);
	
/*@ngInject*/
app.run(
	($translate: angular.translate.ITranslateService) => {

		console.log(`TRANSLATE >> ${$translate.instant("hello")}`);
	}
)

export default app;