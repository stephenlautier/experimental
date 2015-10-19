/// <reference path="../angularjs/angular.d.ts" />
declare module 'ssv-angular-core/logger/logger.model' {
	export const enum LogType {
	    Debug = 0,
	    Info = 1,
	    Warning = 2,
	    Error = 3,
	    Success = 4,
	}
	export interface ILog {
	    debug(source: string, message?: string, data?: any): void;
	    info(source: string, message?: string, data?: any): void;
	    error(source: string, message?: string, data?: any): void;
	    warn(source: string, message?: string, data?: any): void;
	}

}
declare module 'ssv-angular-core/logger/logger.service' {
	import { ILog, LogType } from 'ssv-angular-core/logger/logger.model';
	export class LoggerService {
	    private $log;
	    static id: string;
	    constructor($log: ng.ILogService);
	    log(logType: LogType, message: string, data?: any): void;
	}
	export class Logger implements ILog {
	    private sourceId;
	    private loggerService;
	    constructor(sourceId: string, loggerService: LoggerService);
	    debug(source: string, message?: string, data?: any): void;
	    info(source: string, message?: string, data?: any): void;
	    error(source: string, message?: string, data?: any): void;
	    warn(source: string, message?: string, data?: any): void;
	    private _log(sourceId, source, logType, message?, data?);
	}
	export interface ILoggerFactory {
	    (sourceId: string): ILog;
	}
	export function loggerFactory(loggerService: LoggerService): (sourceId: string) => ILog;

}
declare module 'ssv-angular-core/logger/logger' {
	export * from 'ssv-angular-core/logger/logger.model';
	export * from 'ssv-angular-core/logger/logger.service';

}
declare module 'ssv-angular-core/core.consts' {
	export class CoreConsts {
	    moduleName: string;
	}
	export var consts: CoreConsts;

}
declare module 'ssv-angular-core/core.module' {
	import * as angular from 'angular'; let coreModule: angular.IModule;
	export default coreModule;

}
declare module 'ssv-angular-core/index' {
	export * from 'ssv-angular-core/logger/logger';
	export { default as coreModule } from 'ssv-angular-core/core.module';
	export { consts as coreConsts } from 'ssv-angular-core/core.consts';

}
declare module 'ssv-angular-core' {
	export * from 'ssv-angular-core/index');
	//export = main;
}
