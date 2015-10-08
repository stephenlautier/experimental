// import {ILog, ILoggerFactory} from "./_core/logger/logger.service";
// import {consts} from "./tooltip.const"
// 
// import {TooltipService} from "./tooltip.service";
import * as angular from "angular";

import {Config} from "./app.config";

console.log("BEFORE TooltipSampleController def ")
export class TooltipSampleController {
	static id = "tooltipSampleController";
	id = TooltipSampleController.id;


	//private logger: Core.ILog;

	constructor(
	// loggerFactory: Core.ILoggerFactory,
	// private tooltipService: TooltipService
		) {

		//this.logger = loggerFactory(TooltipSampleController.id);
	}

	isEnabled = true;

	// 	displayOnceTarget($event) {
	// 
	// 		this.logger.debug("displayOnce", "adding tooltip...");
	// 
	// 		this.tooltipService.showOnce({
	// 			targetElement: angular.element("#display-once"),
	// 			content: "Action tooltip!",
	// 
	// 			// optional
	// 			position: TooltipPosition.Right,
	// 			size: TooltipSize.Large
	// 		});
	// 	}
	// 
	// 	displayOnceSelf($event) {
	// 
	// 		this.logger.debug("displayOnce", "adding tooltip...");
	// 
	// 		this.tooltipService.showOnce({
	// 			targetElement: $event.currentTarget,
	// 			content: "Action tooltip!"
	// 		});
	// 	}
	// 
	// 	displayPersistent($event) {
	// 		this.logger.debug("displayPersistent", "adding tooltip...");
	// 		this.tooltipService.showOnce({
	// 			targetElement: angular.element("#display-persistent"),
	// 			content: "Click anywhere to close!",
	// 			duration: 0,
	// 		});
	// 	}
	// 
	// 	displayTranslate($event) {
	// 		this.logger.debug("displayTranslate", "adding tooltip...");
	// 		this.tooltipService.showOnce({
	// 			targetElement: $event.currentTarget,
	// 			content: "tooltip.hello-name",
	// 			translateData: {
	// 				name: "chiko"
	// 			}
	// 		});
	// 	}


	toggleEnabled() {
		this.isEnabled = !this.isEnabled;
	}
}

// angular.module("ssv-lab")
// 	.config((tooltipProvider: TooltipProvider) => {
// 
// 		tooltipProvider.setDefaults({
// 			//theme: "flat-ui",
// 			useTranslate: true
// 		});
// 
// 	});

export class TooltipSampleDirective implements angular.IDirective {

	constructor(
		private config: Config
		) {
		console.log("TooltipSampleDirective ctor!");
	}

				scope = {};
	templateUrl = `${this.config.basePath}/tooltip-sample.html`;
	replace = true;
	controller = TooltipSampleController;
	controllerAs = "vm";
}

export var tooltipSampleDirective = (config: Config): angular.IDirective => {
	return {
		scope: {},
		templateUrl: `${config.basePath}/tooltip-sample.html`,
		replace: true,
		controller: TooltipSampleController,
		controllerAs: "vm"
	};
};

// console.log("tooltip-sample.directive -- running!!!");
// angular.module("ssv-lab")
// 	.directive("ssvTooltipSample", (config: IConfig): angular.IDirective => {
// 		return {
// 			scope: {},
// 			templateUrl: `${config.basePath}/tooltip-sample.html`,
// 			replace: true,
// 			controller: TooltipSampleController,
// 			controllerAs: "vm"
// 		};
// 	});
// 
// 
// export default function init() {
// 	console.log("fake init");
// };
