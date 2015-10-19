/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../tooltipster/tooltipster.d.ts" />
declare module 'angular-tooltipster/tooltip.const' {
	export class TooltipsConsts {
	    moduleName: string;
	}
	export var consts: TooltipsConsts;

}
declare module 'angular-tooltipster/tooltip.model' {
	export enum TooltipPosition {
	    Top = 0,
	    Left = 1,
	    Right = 2,
	    Bottom = 3,
	}
	export enum TooltipSize {
	    Tiny = 0,
	    Small = 1,
	    Medium = 2,
	    Large = 3,
	}
	export interface ITooltipCommonOptions {
	    /**
	         * Target element which the tooltip gets attached to.
	         */
	    targetElement: ng.IAugmentedJQuery | JQuery;
	    /**
	         * Content which gets displayed within the tooltip. Can also be a translation key.
	         */
	    content: string;
	    /**
	         * Indicates that the content should be HTML.
	         */
	    contentAsHtml?: boolean;
	    /**
	         * Position where it gets displayed eg. 'left', 'right', 'buttom', 'top', 'top-right' etc...
	         */
	    position?: TooltipPosition | string;
	    /**
	         * Delay how long it takes (in milliseconds) for the tooltip to start animating in.
	         */
	    delay?: number;
	    /**
	         * Set the speed of the animation.
	         */
	    speed?: number;
	    /**
	         * Theme CSS class which gets attached with the tooltip.
	         */
	    theme?: string;
	    minWidth?: number;
	    maxWidth?: number;
	    /**
	         * Allows you to put multiple tooltips on a single element. Read further instructions down this page. Default: false.
	         */
	    multiple?: boolean;
	    /**
	         * Create a custom function to be fired only once at instantiation. If the function returns a value, this value will become the content of the tooltip.
	         * @param origin
	         * @param content
	         * @returns
	         */
	    onInit?: (origin: JQuery, content: string) => void;
	    /**
	         * Create a custom function to be fired before the tooltip opens. This function may prevent or hold off the opening.
	         * @param origin
	         * @param continueTooltip
	         * @returns
	         */
	    onBeforeOpen?: (origin: JQuery, continueTooltip: () => void) => void;
	    /**
	         * Create a custom function to be fired when the tooltip and its contents have been added to the DOM
	         * @param origin
	         * @param tooltip
	         * @returns
	         */
	    onReady?: (origin: JQuery, tooltip: JQuery) => void;
	    /**
	         * Create a custom function to be fired once the tooltip has been closed and removed from the DOM
	         * @param origin
	         * @returns
	         */
	    onClosed?: (origin: JQuery) => void;
	    /****** Custom Params ******/
	    /**
	         * Additional css class which gets attached with the tooltip.
	         */
	    cssClass?: string;
	    /**
	         * Size of the tooltip.
	         */
	    size?: TooltipSize | string;
	    /**
	         * Determine whether content will be fetched from translation.
	         */
	    useTranslate?: boolean;
	    /**
	         * Translation data for content to interpolate.
	         */
	    translateData?: any;
	}
	export interface ITooltipShowOnceOptions extends ITooltipCommonOptions {
	    /**
	         * Specify duration (in milliseconds) after which it gets auto-destroyed. Set to 0 to remain without duration.
	         */
	    duration?: number;
	}
	export interface ITooltipOpenOptions extends ITooltipCommonOptions {
	    /**
	         * Set how tooltips should be actived and closed e.g. hover, click, etc...
	         */
	    trigger?: string;
	    /**
	         * Specify if a title attribute should be restored on the HTML element after a call to the 'destroy'.
	         * Possible values: 'none, 'previous' or 'current'
	         */
	    restoration?: string;
	    /**
	         * How long the tooltip should be allowed to live before closing.
	         */
	    timer?: number;
	}
	/**
	 * Default options for the tooltip.
	 */
	export interface ITooltipDefaultOptions extends JQueryTooltipster.ITooltipsterOptions {
	    /**
	         * Determine whether by default uses translate.
	         */
	    useTranslate?: boolean;
	    /**
	         * Default size of the tooltip.
	         */
	    size?: string;
	    /**
	         * Default duration for showOnce.
	         */
	    showOnceDuration?: number;
	    /**
	         * Default theme for showOnce.
	         */
	    showOnceTheme?: string;
	    /**
	         * Default 'multiple' for showOnce, this will allow multiple tooltips on the same tooltip before its closed.
	         */
	    showOnceMultiple?: boolean;
	}

}
declare module 'angular-tooltipster/tooltip.provider' {
	import { ITooltipDefaultOptions } from 'angular-tooltipster/tooltip.model';
	export interface ITooltipProvider {
	    defaults: ITooltipDefaultOptions;
	    setDefaults(newDefaults: ITooltipDefaultOptions): void;
	}
	export class TooltipProvider implements ng.IServiceProvider {
	    static id: string;
	    $get(): ITooltipProvider;
	    /**
	    * Get default options.
	    */
	    defaults: ITooltipDefaultOptions;
	    /**
	    * Set default options.
	    * @param {ITooltipDefaultOptions} newDefaults
	    * @returns
	    */
	    setDefaults(newDefaults: ITooltipDefaultOptions): void;
	    private setTooltipsterDefaults(newDefaults);
	}

}
declare module 'angular-tooltipster/tooltip.service' {
	import { ITooltipOpenOptions, ITooltipShowOnceOptions } from 'angular-tooltipster/tooltip.model';
	import { ITooltipProvider } from 'angular-tooltipster/tooltip.provider';
	import { ILoggerFactory } from "ssv-angular-core";
	import TooltipsterInstance = JQueryTooltipster.ITooltipsterInstance;
	export class TooltipService {
	    private $rootScope;
	    private $compile;
	    private $translate;
	    private tooltip;
	    static id: string;
	    private logger;
	    private _defaultOptions;
	    constructor(loggerFactory: ILoggerFactory, $rootScope: ng.IRootScopeService, $compile: ng.ICompileService, $translate: ng.translate.ITranslateService, tooltip: ITooltipProvider);
	    /**
	    * Attaches the tooltip component to the element.
	    * @param {ITooltipOpenOptions} options
	    * @returns
	    */
	    attach(options: ITooltipOpenOptions): TooltipsterInstance;
	    /**
	    * Show tooltip once and auto destroy.
	    * @param {ITooltipShowOnceOptions} options
	    * @returns
	    */
	    showOnce(options: ITooltipShowOnceOptions): TooltipsterInstance;
	    private build(options);
	    private buildCssClasses(options);
	    private setTranslation(options);
	    private getTooltipsterObjects(tooltip);
	    private getTooltipsterFirstObject(tooltip);
	}

}
declare module 'angular-tooltipster/tooltip.directive' {
	import { ILoggerFactory } from "ssv-angular-core";
	import { TooltipService } from 'angular-tooltipster/tooltip.service';
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
	    private tooltipService;
	    static id: string;
	    private logger;
	    restrict: string;
	    constructor(loggerFactory: ILoggerFactory, tooltipService: TooltipService);
	    link: ($scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ITooltipAttributes) => void;
	    static factory(): ng.IDirectiveFactory;
	}

}
declare module 'angular-tooltipster/tooltip.module' {
	import * as angular from "angular"; let angularTooltipsterModule: angular.IModule;
	export default angularTooltipsterModule;

}
declare module 'angular-tooltipster/index' {
	export * from 'angular-tooltipster/tooltip.const';
	export * from 'angular-tooltipster/tooltip.service';
	export * from 'angular-tooltipster/tooltip.provider';
	export * from 'angular-tooltipster/tooltip.model';
	export { default as angularTooltipsterModule } from 'angular-tooltipster/tooltip.module';

}
declare module 'angular-tooltipster' {
	import main = require('angular-tooltipster/index');
	export = main;
}
