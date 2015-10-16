declare module 'angular-tooltipster/tooltip.const' {
	export class TooltipsConsts {
	    moduleName: string;
	}
	export var consts: TooltipsConsts;

}
declare module 'angular-tooltipster' {
	import main = require('./index');
	export = main;
}
