import { Logger, ILogObj } from 'tslog';

export class LoggerService {
	public logger: Logger<ILogObj>;

	constructor() {
		this.logger = new Logger();
	}

	log(...args: unknown[]): void {
		this.logger.info(...args);
	}

	error(...args: unknown[]): void {
		this.logger.error(...args);
	}

	warn(...args: unknown[]): void {
		this.logger.warn(...args);
	}
}

export const loggerService = new LoggerService();