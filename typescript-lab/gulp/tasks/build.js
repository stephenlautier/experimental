var config = require("../config");
var gulp = require("gulp");
var $ = require("gulp-load-plugins")(config.loadPluginsOptions);

gulp.task("build", (cb) => {

	return $.runSequence(
		"scripts",
		cb);
});

gulp.task("build:rel", (cb) => {

	return $.runSequence(
		"scripts:rel",
		"build:copy-dist",
		cb);
});

gulp.task("rebuild", (cb) => {
	return $.runSequence(
		"clean",
		"build",
		cb);
});

gulp.task("build:copy-dist", () => {
	return gulp.src([`${config.artifact}/**/*`, `!${config.test.output}/**/*`])
		.pipe(gulp.dest(config.output));
});