import {ITooltipDefaultOptions, ITooltipCommonOptions, ITooltipOpenOptions, ITooltipShowOnceOptions, TooltipPosition, TooltipSize} from "./tooltip.model";
import {ITooltipProvider} from "./tooltip.provider";
import {consts} from "./tooltip.const"
import {ILog, ILoggerFactory} from "./_core/logger/logger.service";

import TooltipsterInstance = JQueryTooltipster.ITooltipsterInstance;
import TooltipsterOptions = JQueryTooltipster.ITooltipsterOptions;

export class TooltipService {
	static id = "tooltipService";

	private logger: ILog;
	private _defaultOptions: ITooltipDefaultOptions;

	/*@ngInject*/
	constructor(
		loggerFactory: ILoggerFactory,
		private $rootScope: ng.IRootScopeService,
		private $compile: ng.ICompileService,
		private $translate: ng.translate.ITranslateService,
		private tooltip: ITooltipProvider
		) {
		this.logger = loggerFactory(TooltipService.id);
		this._defaultOptions = tooltip.defaults;
	}

	/**
	* Attaches the tooltip component to the element.
	* @param {ITooltipOpenOptions} options
	* @returns
	*/
	attach(options: ITooltipOpenOptions): TooltipsterInstance {
		var $tooltip = this.build(options);
		return $tooltip;
	}


	/**
	* Show tooltip once and auto destroy.
	* @param {ITooltipShowOnceOptions} options
	* @returns
	*/
	showOnce(options: ITooltipShowOnceOptions): TooltipsterInstance {

		options.duration = _.isUndefined(options.duration) ? this._defaultOptions.showOnceDuration : options.duration;
		options.theme = _.isUndefined(options.theme) ? this._defaultOptions.showOnceTheme : options.theme;
		options.multiple = _.isUndefined(options.multiple) ? this._defaultOptions.showOnceMultiple : options.multiple;

		var coreOpts = <ITooltipOpenOptions>_.merge(options, {
			trigger: "click",
			restoration: "previous",
			multiple: options.multiple,
			onClosed: (origin: JQuery) => {
				this.logger.debug("showOnce:onClosed", "after..");
				var tooltip = this.getTooltipsterFirstObject(origin);
				if (tooltip) {
					tooltip.destroy();
				}
			}
		});

		var $tooltip = this.build(coreOpts);
		$tooltip.show();

		if (options.duration) {
			this.logger.debug("showOnce", "auto destroying in", options.duration);

			setTimeout(() => {
				$tooltip.hide();
			}, options.duration);
		}
		return $tooltip;
	}

	private build(options: ITooltipOpenOptions): TooltipsterInstance {
		this.setTranslation(options);
			
		// append additional class with the current theme.
		var cssClasses = this.buildCssClasses(options);

		var position: string;
		if (!_.isUndefined(options.position) && (typeof options.position !== "string")) {
			position = (<any>TooltipPosition)[options.position].toLowerCase();
		} else {
			position = <string>options.position;
		}

		//this.logger.debug("build", "build options", options);

		var $tooltip = $(options.targetElement).tooltipster(<TooltipsterOptions>{
			content: options.content,
			contentAsHTML: options.contentAsHtml,
			trigger: options.trigger,
			position: position,
			restoration: options.restoration,
			speed: options.speed,
			timer: options.timer,
			theme: cssClasses,
			minWidth: options.minWidth,
			maxWidth: options.maxWidth,
			multiple: options.multiple,
			functionInit: options.onInit,
			functionBefore: options.onBeforeOpen,
			functionReady: options.onReady,
			functionAfter: options.onClosed
		});

		return this.getTooltipsterFirstObject($tooltip);
	}

	private buildCssClasses(options: ITooltipOpenOptions): string {

		var theme = _.isUndefined(options.theme) ? this._defaultOptions.theme : options.theme;
		var cssClass = options.cssClass;

		var size: string;
		if (!_.isUndefined(options.size) && (typeof options.size !== "string")) {
			size = (<any>TooltipSize)[options.size].toLowerCase();
		} else {
			size = _.isUndefined(options.size) ? this._defaultOptions.size : <string>options.size;
		}

		if (size) {
			size = `tooltip-${size}`;
		}

		var classes = [theme, cssClass, size];
		return _.without(classes, undefined).join(" ");
	}

	private setTranslation(options: ITooltipCommonOptions): void {

		var useTranslate = _.isUndefined(options.useTranslate) ? this._defaultOptions.useTranslate : options.useTranslate;

		if (!useTranslate || !options.content) {
			return;
		}

		options.content = this.$translate.instant(options.content, options.translateData);
	}

	private getTooltipsterObjects(tooltip: JQuery|any): TooltipsterInstance[] {

		if (tooltip instanceof jQuery) {

			var nss = tooltip.data("tooltipster-ns");

			if (!nss) {
				return void 0;
			}

			var tooltipInstances: TooltipsterInstance[] = [];

			for (var ns of nss) {
				var instance = tooltip.data(ns);
				tooltipInstances.push(instance);
			}

			return tooltipInstances;
		} else {
			return tooltip;
		}
	}

	private getTooltipsterFirstObject(tooltip: ng.IAugmentedJQuery|JQuery|TooltipsterInstance[]): TooltipsterInstance {
		var tooltips = this.getTooltipsterObjects(tooltip);
		return tooltips ? tooltips[0] : void 0;
	}


}