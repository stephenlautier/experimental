import {ITooltipDefaultOptions} from "./tooltip.model";
import {consts} from "./tooltip.const"

export interface ITooltipProvider {
	defaults: ITooltipDefaultOptions;
	setDefaults(newDefaults: ITooltipDefaultOptions): void;
}

export class TooltipProvider implements ng.IServiceProvider {
	static id = "tooltip";
	
	$get(): ITooltipProvider {
		this.setTooltipsteDefaults(this.defaults);
		return <ITooltipProvider>{
			setDefaults: this.setDefaults,
			defaults: this.defaults
		}
	}

	/**
	* Get default options.
	*/
	defaults = <ITooltipDefaultOptions>{
		theme: "default-theme",
		useTranslate: true,
		position: "top",
		size: "medium",
		distance: 7,
		maxWidth: 250,
		showOnceDuration: 1500,
		showOnceTheme: "action-tooltip",
		showOnceMultiple: true,
	}

	/**
	* Set default options.
	* @param {ITooltipDefaultOptions} newDefaults
	* @returns
	*/
	setDefaults(newDefaults: ITooltipDefaultOptions): void {
		angular.extend(this.defaults, newDefaults);
		this.setTooltipsteDefaults(this.defaults);
	}

	private setTooltipsteDefaults(newDefaults: JQueryTooltipster.ITooltipsterOptions) {
		$.fn.tooltipster("setDefaults", newDefaults);
	}
}