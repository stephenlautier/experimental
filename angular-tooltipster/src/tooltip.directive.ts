import {ILog, ILoggerFactory} from "./_core/logger/logger.service";
import {consts} from "./tooltip.const"

import {TooltipService} from "./tooltip.service";


/**
 * @see ITooltipOpenOptions
 */
export interface ITooltipAttributes extends ng.IAttributes {
	ssvTooltip: string;
	ssvTooltipContent: string;
	ssvTooltipContentHtml: string;
	ssvTooltipContentData: string;

	ssvTooltipClass: string;
	ssvTooltipTarget: string;
	ssvTooltipPosition: string;
	ssvTooltipSize: string;
	ssvTooltipTrigger: string;
	ssvTooltipDelay: string;
	ssvTooltipTheme: string;
	ssvTooltipMinWidth: string;
	ssvTooltipMaxWidth: string;

	ssvTooltipEnabled: string;
}

/**
 * Usage Example:
 *		<button ssv-tooltip ssv-tooltip-content="tooltip.hello-friends" ></button> 
 */
export class TooltipDirective implements ng.IDirective {
	static id = "ssvTooltip";

	private logger: ILog;
	restrict = "A";

	constructor(
		loggerFactory: ILoggerFactory,
		private tooltipService: TooltipService
		) {

		this.logger = loggerFactory(TooltipDirective.id);
	}

	link = ($scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ITooltipAttributes) => {

		var target = _.isUndefined(attrs.ssvTooltipTarget) ? element : $(attrs.ssvTooltipTarget);

		var $tipster = this.tooltipService.attach({
			targetElement: target,
			content: _.isUndefined(attrs.ssvTooltipContentHtml) ? attrs.ssvTooltipContent : attrs.ssvTooltipContentHtml,
			contentAsHtml: _.isUndefined(attrs.ssvTooltipContentHtml) ? void 0 : true,
			translateData: _.isUndefined(attrs.ssvTooltipContentData) ? void 0 : $scope.$eval(attrs.ssvTooltipContentData),
			theme: attrs.ssvTooltipTheme,
			cssClass: attrs.ssvTooltipClass,
			position: attrs.ssvTooltipPosition,
			size: attrs.ssvTooltipSize,
			trigger: attrs.ssvTooltipTrigger,
			delay: _.isUndefined(attrs.ssvTooltipDelay) ? void 0 : parseInt(attrs.ssvTooltipDelay),
			minWidth: _.isUndefined(attrs.ssvTooltipMinWidth) ? void 0 : parseInt(attrs.ssvTooltipMinWidth),
			maxWidth: _.isUndefined(attrs.ssvTooltipMaxWidth) ? void 0 : parseInt(attrs.ssvTooltipMaxWidth),

		});

		attrs.$observe("ssvTooltipEnabled", (newValue: string) => {

			this.logger.debug("$observe::ssvTooltipEnabled", "updating..", newValue);
			if (newValue === "true") {
				$tipster.enable();
			} else {
				$tipster.disable();
			}

		});

		$scope.$on("$destroy", () => {
			this.logger.debug("$destroy", "Cleaning up...");
			if ($tipster) {
				this.logger.debug("$destroy", "destroying tooltipster");
				$tipster.destroy();
			}
		});

	}

	static factory(): ng.IDirectiveFactory {
		/*@ngInject*/
		var directive = (
			loggerFactory: ILoggerFactory,
			tooltipService: TooltipService
			) => {
			return new TooltipDirective(loggerFactory, tooltipService);
		};

		return directive;
	}
}