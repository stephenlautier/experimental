export enum TooltipPosition {
	Top,
	Left,
	Right,
	Bottom,
}

export enum TooltipSize {
	Tiny,
	Small,
	Medium,
	Large,
}

export interface ITooltipCommonOptions {
	/**
		 * Target element which the tooltip gets attached to.
		 */
	targetElement: ng.IAugmentedJQuery|JQuery;

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
	position?: TooltipPosition|string;

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
	onInit?: (origin, content) => void;

	/**
		 * Create a custom function to be fired before the tooltip opens. This function may prevent or hold off the opening.
		 * @param origin
		 * @param continueTooltip
		 * @returns
		 */
	onBeforeOpen?: (origin, continueTooltip) => void;

	/**
		 * Create a custom function to be fired when the tooltip and its contents have been added to the DOM
		 * @param origin
		 * @param tooltip
		 * @returns
		 */
	onReady?: (origin, tooltip) => void;

	/**
		 * Create a custom function to be fired once the tooltip has been closed and removed from the DOM
		 * @param origin
		 * @returns
		 */
	onClosed?: (origin) => void;

	/****** Custom Params ******/

	/**
		 * Additional css class which gets attached with the tooltip.
		 */
	cssClass?: string;

	/**
		 * Size of the tooltip.
		 */
	size?: TooltipSize|string;

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
