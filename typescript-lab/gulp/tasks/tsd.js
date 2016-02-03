var config = require("../config");
var gulp = require("gulp");
var $ = require("gulp-load-plugins")(config.loadPluginsOptions);

var tsdJson = "tsd.json";


gulp.task("tsd:install", () => {
	var bower = require($.path.join(process.cwd(), "bower.json"));

	var dependencies = [].concat(
		Object.keys(bower.dependencies)
		//Object.keys(bower.devDependencies)
		);

	var query = new $.tsd.Query();
	dependencies.forEach(function (dependency) {
		query.addNamePattern(dependency);
	});

	var options = new $.tsd.Options();
	options.resolveDependencies = true;
	options.overwriteFiles = true;
	options.saveBundle = true;
	
	var tsdApi = new $.tsd.getAPI(tsdJson);
	
	return tsdApi.readConfig()
		.then(function () {
			return tsdApi.select(query, options);
		})
		.then(function (selection) {
			return tsdApi.install(selection, options);
		})
		.then(function (installResult) {
			var written = Object.keys(installResult.written.dict);
			var removed = Object.keys(installResult.removed.dict);
			var skipped = Object.keys(installResult.skipped.dict);

			written.forEach(function (dts) {
				$.util.log(`Definition file written: ${dts}`);
			});

			removed.forEach(function (dts) {
				$.util.log(`Definition file removed: ${dts}`);
			});

			skipped.forEach(function (dts) {
				$.util.log(`Definition file skipped: ${dts}`);
			});
		});
});

gulp.task("tsd:purge", () => {
	var tsdApi = new $.tsd.getAPI(tsdJson);
	return tsdApi.purge(true, true);
});

gulp.task("tsd", ["tsd:install"]);