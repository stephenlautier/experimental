import * as angular from 'angular';
import {LoggerService, Logger, ILog, ILoggerFactory, loggerFactory } from "./logger/logger.service";
import {consts} from "./core.consts";


console.log(`>>> REGISTER ng-module '${consts.moduleName}'`);
let coreModule = angular.module(consts.moduleName, [

]);

coreModule
	.service(LoggerService.id, LoggerService)
	.factory("loggerFactory", loggerFactory);
 
export default coreModule;