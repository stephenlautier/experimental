var path = require("path");
var fs = require("fs");

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const appRoot = "src";
const outRoot = "wwwroot";
const tsdMainFile = "typings/tsd.d.ts";

module.exports = {
	output: {
		root: outRoot,
		dist: "dist"
	},
	src: {
		root: appRoot,
		ts: [tsdMainFile, `${appRoot}/**/*.ts`]
	},
	doc: "./doc",
	packageName: pkg.name
};