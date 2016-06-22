System.config({
	defaultJSExtensions: true,
	transpiler: false,
	paths: {
		"github:*": "jspm_packages/github/*",
		"npm:*": "jspm_packages/npm/*"
	},

	map: {
		"lodash": "node_modules/lodash",
	},
	packages: {
		"lodash": { main: "index.js", defaultExtension: "js" }
	}
});
