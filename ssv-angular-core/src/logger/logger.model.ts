// reference: https://github.com/stephenlautier/angular-typescript/blob/master/app/services/logger.svc.ts

export const enum LogType {
	Debug,
	Info,
	Warning,
	Error,
	Success
}

export interface ILog {
	debug(source: string, message?: string, data?: any): void;
	info(source: string, message?: string, data?: any): void;
	error(source: string, message?: string, data?: any): void;
	warn(source: string, message?: string, data?: any): void;
}
