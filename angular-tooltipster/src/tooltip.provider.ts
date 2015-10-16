import * as $ from "jquery";
import * as tooltipster from "tooltipster";
import {ITooltipDefaultOptions} from "./tooltip.model";
import {consts} from "./tooltip.const";

export interface ITooltipProvider {
	defaults: ITooltipDefaultOptions;
	setDefaults(newDefaults: ITooltipDefaultOptions): void;
}

export class TooltipProvider implements ng.IServiceProvider {
	static id = "tooltip";

	$get(): ITooltipProvider {
		this.setTooltipsterDefaults(this.defaults);
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
		$.extend(this.defaults, newDefaults);
		this.setTooltipsterDefaults(this.defaults);
	}

	private setTooltipsterDefaults(newDefaults: tooltipster.ITooltipsterOptions) {
		if (!$.fn["tooltipster"]) {
			throw "Tooltipster not loaded!";
		}
		$.fn.tooltipster("setDefaults", newDefaults);
	}
}