System.config({
	baseURL: "/",
	defaultJSExtensions: true,
    transpiler: "none",

	paths: {
		//"*": "dist/*",
		"github:*": "jspm_packages/github/*",
		"npm:*": "jspm_packages/npm/*",
		"bower/*": "bower_components/*"
	},

	meta: {
		"angular": {
			format: "global"
		}
	},

	map: {
		"typescript-lab": "_artifact/amd/index",
		"angular": "bower/angular/angular"
	}
});