"bundle";
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("_artifact/logger/logger.model.js", ["require", "exports"], function(require, exports) {});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("_artifact/logger/logger.service.js", ["require", "exports"], function(require, exports) {
  var LoggerService = (function() {
    function LoggerService($log) {
      this.$log = $log;
    }
    LoggerService.prototype.log = function(logType, message, data) {
      switch (logType) {
        case 0:
          this.$log.debug(message, data);
          break;
        case 1:
          this.$log.info(message, data);
          break;
        case 3:
          this.$log.error(message, data);
          break;
        case 2:
          this.$log.warn(message, data);
          break;
        default:
          this.$log.log(message, data);
          break;
      }
    };
    LoggerService.id = "loggerService";
    return LoggerService;
  })();
  exports.LoggerService = LoggerService;
  var Logger = (function() {
    function Logger(sourceId, loggerService) {
      this.sourceId = sourceId;
      this.loggerService = loggerService;
    }
    Logger.prototype.debug = function(source, message, data) {
      this._log(this.sourceId, source, 0, message, data);
    };
    Logger.prototype.info = function(source, message, data) {
      this._log(this.sourceId, source, 1, message, data);
    };
    Logger.prototype.error = function(source, message, data) {
      this._log(this.sourceId, source, 3, message, data);
    };
    Logger.prototype.warn = function(source, message, data) {
      this._log(this.sourceId, source, 2, message, data);
    };
    Logger.prototype._log = function(sourceId, source, logType, message, data) {
      var msg = "[" + sourceId + "::" + source + "] " + message;
      this.loggerService.log(logType, msg, data);
    };
    return Logger;
  })();
  exports.Logger = Logger;
  function loggerFactory(loggerService) {
    return function(sourceId) {
      return new Logger(sourceId, loggerService);
    };
  }
  exports.loggerFactory = loggerFactory;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("_artifact/logger/logger.js", ["require", "exports", "_artifact/logger/logger.model.js", "_artifact/logger/logger.service.js"], function(require, exports, logger_model_1, logger_service_1) {
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export(logger_model_1);
  __export(logger_service_1);
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("_artifact/core.consts.js", ["require", "exports"], function(require, exports) {
  var CoreConsts = (function() {
    function CoreConsts() {
      this.moduleName = "ssv-core";
    }
    return CoreConsts;
  })();
  exports.CoreConsts = CoreConsts;
  exports.consts = new CoreConsts();
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("_artifact/core.module.js", ["require", "exports", "github:angular/bower-angular@1.4.7", "_artifact/logger/logger.js", "_artifact/core.consts.js"], function(require, exports, angular, logger_1, core_consts_1) {
  console.log(">>> REGISTER ng-module '" + core_consts_1.consts.moduleName + "'");
  var coreModule = angular.module(core_consts_1.consts.moduleName, []);
  coreModule.service(logger_1.LoggerService.id, logger_1.LoggerService).factory("loggerFactory", logger_1.loggerFactory);
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = coreModule;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("_artifact/index.js", ["require", "exports", "_artifact/logger/logger.js", "_artifact/core.module.js", "_artifact/core.consts.js"], function(require, exports, logger_1, core_module_1, core_consts_1) {
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export(logger_1);
  exports.coreModule = core_module_1.default;
  exports.coreConsts = core_consts_1.consts;
});

_removeDefine();
})();
//# sourceMappingURL=ssv-angular-core.js.map