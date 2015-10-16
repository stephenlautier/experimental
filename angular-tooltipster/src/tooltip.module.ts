import * as angular from 'angular';
import {consts} from "./tooltip.const"
import {TooltipService} from "./tooltip.service"
import {TooltipProvider} from "./tooltip.provider"
import {TooltipDirective} from "./tooltip.directive"


let app = angular.module(consts.moduleName, [

]);

app.provider(TooltipService.id, TooltipProvider)
	.service(TooltipService.id, TooltipService)
	.directive(TooltipDirective.id, TooltipDirective.factory());