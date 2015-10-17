import * as angular from "angular";
import * as ngTranslate from "angular-translate";
import {consts} from "./tooltip.const";
import {TooltipService} from "./tooltip.service";
import {TooltipProvider} from "./tooltip.provider";
import {TooltipDirective} from "./tooltip.directive";

// force load it
if(ngTranslate){}

console.log(`>>> REGISTER ng-module '${consts.moduleName}'`);
let angularTooltipsterModule = angular.module(consts.moduleName, [
	"pascalprecht.translate" // angular-translate
]);



angularTooltipsterModule.provider(TooltipProvider.id, TooltipProvider)
	.service(TooltipService.id, TooltipService)
	.directive(TooltipDirective.id, TooltipDirective.factory());

 
export default angularTooltipsterModule;