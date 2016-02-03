// Karma configuration
// Generated on Mon Oct 19 2015 18:30:53 GMT+0200 (W. Europe Daylight Time)
var path = require("path");
var conf = require("./gulp/config");

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter    
    frameworks: ["systemjs", "jasmine"],

    systemjs: {
      // Path to your SystemJS configuration file
      configFile: "system.config.js",
      // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
      serveFiles: [
        `${conf.artifact}/**/*.js`,
        "bower_components/**/*.js"
      ],
      
      // // SystemJS configuration specifically for tests, added after your config file.
      // // Good for adding test libraries and mock modules
      config: {
        paths: {
          "angular-mocks": "bower_components/angular-mocks/angular-mocks.js",
          "es6-module-loader": "node_modules/es6-module-loader/dist/es6-module-loader.js",
          "systemjs": "node_modules/systemjs/dist/system.js",
          "system-polyfills": "node_modules/systemjs/dist/system-polyfills.js",
          "test-setup": `${conf.test.output}/setup.js`
        }
      }
    },

    proxies: {
      "/base/_artifact/test/unit/": "/base/_artifact/amd/",
      "/bower_components/": "/base/bower_components/"
    },
  
    // list of files / patterns to load in the browser
    files: [
      "node_modules/jasmine-es6-promise-matchers/jasmine-es6-promise-matchers.js",
      `${conf.test.output}/**/*.spec.js`,
      `${conf.test.output}/*.spec.js`,
      {
        pattern: `${conf.artifact}/**/*.js.map`,
        included: false
      }, {
        pattern: `${conf.artifact}/*.js.map`,
        included: false
      } ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ "mocha" ],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome"],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
