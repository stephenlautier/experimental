var config = require("../config");
var gulp = require("gulp");
var $ = require("gulp-load-plugins")(config.loadPluginsOptions);

gulp.task("test", ["compile:test"], (cb) => {
	runTests(true, cb);
});

gulp.task("tdd", ["compile:test"], (cb) => {
	runTests(false, cb);
});

function runTests(singleRun, cb) {

	new $.karma.Server({
		configFile: $.path.join(__dirname, `../../${config.test.karmaConfig}`),
		singleRun: singleRun,
		autoWatch: !singleRun,
	}, (code) => {
		
		// make sure failed karma tests cause gulp to exit non-zero
		if (code === 1) {
			$.util.log($.util.colors.red("------- Error: unit test failed -------"));
			return process.exit(1);
		}
		cb();
	}).start();
}


gulp.task("compile:test", () => {
	var typescript = require("typescript");

	var tsResult = gulp.src([config.src.tsd, config.test.setup, config.test.files])
		.pipe($.plumber())
	//.pipe(changed(config.test.output, { extension: ".js" }))
		.pipe($.sourcemaps.init())
		.pipe($.typescript(
			$.typescript.createProject("tsconfig.json", {
				sortOutput: true,
				typescript: typescript
			})
		));

	return $.merge2([
		tsResult.js
			.pipe($.sourcemaps.write("."))
			.pipe(gulp.dest(config.test.output))
	]);
});