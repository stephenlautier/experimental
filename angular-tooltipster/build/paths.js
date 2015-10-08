var path = require("path");
var fs = require("fs");


var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
var appRoot = "src/";
var exampleRoot = "example/";
const tsdMainFile = "tools/typings/tsd.d.ts";

module.exports = {
	root: appRoot,
	output: "dist/",
	src: {
		ts: [tsdMainFile, `${appRoot}**/*.ts`]
	},
	doc: "./doc",
	packageName: pkg.name,
	example: {
		root: exampleRoot,
		outputRoot: `${exampleRoot}dist`,
		output: {
			app: `${exampleRoot}dist/app`,
			vendors: `${exampleRoot}dist/vendors`
		},
		src: {
			ts: [tsdMainFile, `${exampleRoot}src/**/*.ts`],
			html: [`${exampleRoot}**/*.html`],
		}
	}
};