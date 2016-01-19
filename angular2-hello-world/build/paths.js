var path = require("path");
var fs = require("fs");

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const srcRoot = "src";
const outRoot = "wwwroot";
const tsdMainFile = "typings/tsd.d.ts";

module.exports = {
	output: {
		root: outRoot,
		dist: "dist"
	},
	src: {
		root: srcRoot,
		tsd: tsdMainFile,
		ts: `${srcRoot}/**/*.ts`,
		html: `${srcRoot}/app/**/*.html`,
		indexHtml: `${srcRoot}/index.html`
	},
	doc: "./doc",
	packageName: pkg.name
};