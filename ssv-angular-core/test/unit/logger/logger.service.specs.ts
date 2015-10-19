import { loggerFactory, coreConsts, LoggerService } from "ssv-angular-core";
import * as ngMocks from "angular-mocks/ngMock";

//TODO: need to actually test and finish properly tests..

describe("LoggerServiceSpecs", () => {

	var SUT: LoggerService;

	beforeEach(angular.mock.module(coreConsts.moduleName));

	beforeEach(inject((
		_loggerService_: LoggerService) => {

		SUT = _loggerService_;

	}));


	describe("given a log is done", () => {

		it("should log successfully", () => {

			//SUT.log()

			expect(1 + 1).toBe(3);
			
		})

	});


});