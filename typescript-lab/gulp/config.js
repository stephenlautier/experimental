var path = require("path");
var fs = require("fs");

var pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
var appRoot = "src";
const tsdMainFile = "tools/typings/tsd.d.ts";

module.exports = {
	root: appRoot,
	output: "dist",
	artifact: "_artifact",
	src: {
		ts: `${appRoot}/**/*.ts`,
		tsd: tsdMainFile
	},
	test: {
		files: `${appRoot}/**/*.spec.{ts,d.ts}`,
		setup:  "tests/setup.ts",
		karmaConfig: "karma.conf.js",
		output: "_artifact/test/unit"
	},
	doc: "./doc",
	packageName: pkg.name,
    loadPluginsOptions: {
        pattern: [
            "gulp-*",
            "gulp.*",
            "run-sequence",
            "del",
            "browser-sync",
            "conventional-changelog",
            "merge2",
            "dts-generator",
            "systemjs-builder",
            "karma",
            "path",
            "tsd"
        ]
    }
};