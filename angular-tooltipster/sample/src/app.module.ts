
import * as angular from "angular";

import {Config} from "./app.config";
import {tooltipSampleDirective} from "./tooltip-sample.directive";
import {consts as angularTooltipsterConsts, coreConsts, TooltipProvider} from "angular-tooltipster";

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

export default app;