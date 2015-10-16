
import * as angular from "angular";

import {Config} from "./app.config";
import {tooltipSampleDirective} from "./tooltip-sample.directive";
import {consts, TooltipService} from "angular-tooltipster";


alert("Yolo! " + consts.moduleName)

let app = angular.module("ssv-lab", [
	

]);


app.constant("config", new Config());
//app.controller("tooltipSampleController",TooltipSampleController )
app.directive("ssvTooltipSample", tooltipSampleDirective);

export default app;